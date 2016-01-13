<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>


<c:if test="${acao eq 'editar' }">
	<c:url var="url" value="/editar"></c:url>
	<c:set var="titulo" value="Editar"></c:set>
</c:if>
<c:if test="${acao eq 'adicionar' }">
	<c:url var="url" value="/adicionar"></c:url>
	<c:set var="titulo" value="Adicionar"></c:set>
</c:if>

<html>
<head>
<jsp:include page="../view/fragments/head.jsp" />
<title>Linx | Adicionar</title>
</head>
<body>
	<jsp:include page="../view/fragments/body.jsp" />

	<div class="container">
		<div class="bs-docs-section">
			<div class="row">
				<div class="col-lg-12">
					<div class="page-header">
						<h1 id="forms">Adicionar</h1>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-lg-12">
					<div class="well bs-component">
						<form:form id="adicionarPessoaForm" commandName="pessoa"
							servletRelativeAction="${url }" method="POST">
							<form:input type="hidden" path="id" />
							<fieldset>
								<legend>Pessoa</legend>
								<div class="form-group">
									<label for="inputNome" class="col-lg-2 control-label">Nome</label>
									<div class="col-lg-10">
										<form:input type="text" path="nome" cssClass="form-control"
											placeholder="Nome" required="required" />
										<br />
									</div>
								</div>
								<div class="form-group">
									<label for="inputCpf" class="col-lg-2 control-label">Cpf</label>
									<div class="col-lg-10">
										<form:input type="text" path="cpf" cssClass="form-control"
											placeholder="Cpf" required="required" />
										<br />
									</div>
								</div>
								<div class="form-group">
									<label for="inputCpf" class="col-lg-2 control-label">Data
										de Nascimento:</label>
									<div class="col-lg-10">
										<form:input id="datepicker" type="text" path="nascimento"
											placeholder="Data de Nascimento" cssClass="form-control data"
											required="required" />
										<br />
									</div>
								</div>
								<div class="form-group">
									<div class="col-lg-10 col-lg-offset-2">
										<button type="reset" class="btn btn-default">Cancel</button>
										<button type="submit" class="btn btn-primary">${titulo}</button>
									</div>
								</div>
							</fieldset>
						</form:form>
						<div id="source-button" class="btn btn-primary btn-xs"
							style="display: none;">&lt; &gt;</div>
					</div>
				</div>
			</div>
		</div>


	</div>

	<jsp:include page="../view/fragments/footer.jsp" />
</body>
</html>