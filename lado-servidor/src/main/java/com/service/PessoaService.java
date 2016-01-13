package com.service;

import java.util.List;

import com.model.Pessoa;

public interface PessoaService {
	
	List<Pessoa> findAll();
	
	void salvar(Pessoa pessoa);
	
	void remover(Integer id);
	
	Pessoa findById(Integer id);
	
	void atualizar(Pessoa pessoa);
	
}
