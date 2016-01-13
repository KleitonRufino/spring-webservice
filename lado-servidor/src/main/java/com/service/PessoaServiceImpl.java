package com.service;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import com.model.Pessoa;
import com.repository.PessoaRepository;

@Named
public class PessoaServiceImpl implements PessoaService {

	@Inject
	private PessoaRepository pessoaRepository;

	@Override
	public List<Pessoa> findAll() {
		return pessoaRepository.findAll();
	}

	@Override
	public void salvar(Pessoa pessoa) {
		pessoaRepository.salvar(pessoa);
	}

	@Override
	public void remover(Integer id) {
		Pessoa contato = pessoaRepository.findById(id);
		pessoaRepository.remover(contato);
	}

	@Override
	public Pessoa findById(Integer id) {
		return pessoaRepository.findById(id);
	}

	@Override
	public void atualizar(Pessoa pessoa) {
		pessoaRepository.atualizar(pessoa);
	}
	

}
