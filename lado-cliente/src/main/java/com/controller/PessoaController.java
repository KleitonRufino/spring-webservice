package com.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.model.Pessoa;
import com.model.Resposta;

@Controller
public class PessoaController {

	private static final String url = "http://localhost:8080/lado-servidor/pessoa/";

	@RequestMapping(value = "/")
	public String index() {
		return "home";
	}

	@RequestMapping(value = "listar")
	public String listar(Model model) {
		String urlListar = url + "findAll";
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<Pessoa[]> responseEntity = restTemplate.getForEntity(urlListar, Pessoa[].class);
		Pessoa[] pessoas = responseEntity.getBody();
		model.addAttribute("pessoas", pessoas);
		return "listar";
	}

	@RequestMapping(value = "adicionar", method = RequestMethod.GET)
	public String adicionar(Model model) {
		model.addAttribute("acao", "adicionar");
		model.addAttribute("pessoa", new Pessoa());
		return "adicionar";
	}

	@RequestMapping(value = "adicionar", method = RequestMethod.POST)
	public String adicionar(@ModelAttribute("pessoa") Pessoa pessoa, RedirectAttributes redirect) {
		String urlAdicionar = url + "insert";
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<Resposta> resposta = restTemplate.postForEntity(urlAdicionar, pessoa, Resposta.class);
		redirect.addFlashAttribute("info", resposta.getBody().getResposta());
		return "redirect:/listar";
	}

	@RequestMapping(value = "/remover/{id}", method = RequestMethod.GET)
	public String remover(@PathVariable Integer id, RedirectAttributes redirect) {
		String urlRemover = url + "/delete/" + id;
		Map<String, Integer> params = new HashMap<String, Integer>();
		params.put("id", id);

		RestTemplate restTemplate = new RestTemplate();
		restTemplate.delete(urlRemover, params);
		redirect.addFlashAttribute("info", "Pessoa removida com sucesso");

		return "redirect:/listar";
	}

	@RequestMapping(value = "editar/{id}", method = RequestMethod.GET)
	public String editar(@PathVariable("id") Integer id, Model model) {
		String urlFind = url + "{id}";

		Map<String, Integer> params = new HashMap<String, Integer>();
		params.put("id", id);

		RestTemplate restTemplate = new RestTemplate();
		Pessoa pessoa = restTemplate.getForObject(urlFind, Pessoa.class, params);

		model.addAttribute("acao", "editar");
		model.addAttribute("pessoa", pessoa);
		return "adicionar";
	}

	@RequestMapping(value = "editar", method = RequestMethod.POST)
	public String editar(@ModelAttribute("pessoa") Pessoa pessoa, RedirectAttributes redirect) {
		String urlAtualizar = url + "update";
		Map<String, Integer> params = new HashMap<String, Integer>();
		params.put("id", pessoa.getId());

		RestTemplate restTemplate = new RestTemplate();
		restTemplate.put(urlAtualizar, pessoa);
		redirect.addFlashAttribute("info", "Pessoa atualizada com sucesso");

		return "redirect:/listar";
	}
}
