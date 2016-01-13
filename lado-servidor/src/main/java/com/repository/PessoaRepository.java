package com.repository;

import java.util.List;

import com.model.Pessoa;

public interface PessoaRepository {
	
	List<Pessoa> findAll();
	
	void salvar(Pessoa pessoa);
	
	Pessoa findById(Integer id);
	
	void remover(Pessoa pessoa);
	
	void atualizar(Pessoa pessoa);
}
