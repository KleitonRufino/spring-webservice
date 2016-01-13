package com.repository;

import java.util.List;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.transaction.annotation.Transactional;

import com.model.Pessoa;

@Named
public class PessoaRepositoryImpl implements PessoaRepository {

	protected EntityManager em;

	@PersistenceContext
	public void setEntityManager(EntityManager em) {
		this.em = em;
	}

	@Override
	public List<Pessoa> findAll() {
		TypedQuery<Pessoa> query = em.createQuery("from Pessoa", Pessoa.class);
		return query.getResultList();
	}

	@Override
	@Transactional
	public void salvar(Pessoa pessoa) {
		em.persist(pessoa);
	}

	@Override
	public Pessoa findById(Integer id) {
		return em.find(Pessoa.class, id);
	}

	@Override
	@Transactional
	public void remover(Pessoa pessoa) {
		em.remove(em.merge(pessoa));

	}

	@Override
	@Transactional
	public void atualizar(Pessoa pessoa) {
		em.merge(pessoa);
	}

}
