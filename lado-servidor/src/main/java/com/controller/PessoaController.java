package com.controller;

import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.enumeration.ResponseStatus;
import com.model.Pessoa;
import com.model.Resposta;
import com.service.PessoaService;

@Controller
@RequestMapping("pessoa")
public class PessoaController {

	@Inject
	private PessoaService pessoaService;
	private Logger log = LoggerFactory.getLogger(this.getClass());

	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<Pessoa> findAll() {
		log.debug("Pessoa - GET (all)");
		return pessoaService.findAll();
	}

	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public @ResponseBody Pessoa findById(@PathVariable Integer id) {
		log.debug("Pessoa - GET (id)");
		return pessoaService.findById(id);
	}

	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody Resposta insert(@RequestBody Pessoa pessoa) {
		log.debug("Pessoa - POST");
		pessoaService.salvar(pessoa);
		return new Resposta(ResponseStatus.SUCCESS, "Pessoa inserida com sucesso");
	}

	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	public @ResponseBody Resposta delete(@PathVariable Integer id) {
		log.debug("Pessoa - DELETE");
		pessoaService.remover(id);
		return new Resposta(ResponseStatus.SUCCESS, "Pessoa removida com sucesso");
	}

	@RequestMapping(value = "{id}", method = RequestMethod.PUT)
	public @ResponseBody Resposta update(@PathVariable Integer id, @RequestBody Pessoa pessoa) {
		log.debug("Participante - PUT");
		pessoaService.atualizar(pessoa);
		return new Resposta(ResponseStatus.SUCCESS, "Pessoa atualizada com sucesso");
	}
}
