package com.model;

import com.enumeration.ResponseStatus;

public class Resposta {
	private String resposta;
	private ResponseStatus status;
	public Resposta() {

	}

	public Resposta(ResponseStatus status,String resposta) {
		super();
		this.status = status;
		this.resposta = resposta;
	}

	public String getResposta() {
		return resposta;
	}

	public void setResposta(String resposta) {
		this.resposta = resposta;
	}

	public ResponseStatus getStatus() {
		return status;
	}

	public void setStatus(ResponseStatus status) {
		this.status = status;
	}

}
