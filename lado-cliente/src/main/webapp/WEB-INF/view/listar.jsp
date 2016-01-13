<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<html>
<head>
<jsp:include page="../view/fragments/head.jsp" />
<title>Linx | Listar Pessoas</title>
</head>
<body>
	<jsp:include page="../view/fragments/body.jsp" />

	<div class="container">


		<div class="container" id="message">
			<c:if test="${not empty erro}">
				<div class="alert alert-danger alert-dismissible" role="alert">
					<button type="button" class="close" data-dismiss="alert">
						<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
					</button>
					<c:out value="${erro}"></c:out>
				</div>
			</c:if>
			<c:if test="${not empty info}">
				<div class="alert alert-info alert-dismissible" role="alert">
					<button type="button" class="close" data-dismiss="alert">
						<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
					</button>
					<c:out value="${info}"></c:out>
				</div>
			</c:if>
		</div>

		<div class="bs-docs-section">
			<div class="row">
				<div class="col-lg-12">
					<div class="page-header">
						<h1 id="tables">Lista Pessoas</h1>
					</div>
					<div class="bs-component">
						<table class="table table-striped table-hover ">
							<thead>
								<tr>
									<th>#</th>
									<th>Nome</th>
									<th>CPF</th>
									<th>Data Nascimento</th>
									<th>Ações</th>
								</tr>
							</thead>
							<tbody>
								<c:forEach items="${pessoas}" var="pessoa">
									<tr>
										<td>${pessoa.id }</td>
										<td>${pessoa.nome }</td>
										<td>${pessoa.cpf }</td>
										<td>${pessoa.nascimento }</td>
										<td><a id="editar" title="Editar"
											href="/lado-cliente/editar/${pessoa.id }">
												<button class="btn btn-primary btn-sm" title="Editar Pessoa">
													<span class="glyphicon glyphicon-pencil"></span>
												</button>
										</a> <a title="Excluir Pessoa" data-toggle="modal"
											data-target="#admin-excluir-pessoa" href="#"
											data-href="<c:url value="/remover/${pessoa.id}"></c:url>"
											data-name="${pessoa.nome}">
												<button class="btn btn-danger btn-sm">
													<span class="glyphicon glyphicon-trash"></span>
												</button>
										</a></td>
									</tr>
								</c:forEach>
							</tbody>
						</table>
					</div>
				</div>
			</div>




			<!-- Modal Excluir Reserva -->
			<div class="modal fade" id="admin-excluir-pessoa" tabindex="-1"
				role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
							<h4 class="modal-title" id="excluirModalLabel">Excluir</h4>
						</div>
						<div class="modal-body"></div>
						<div class="modal-footer">
							<a href="#" class="btn btn-danger">Excluir</a>
							<button type="button" class="btn btn-default"
								data-dismiss="modal">Cancelar</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<jsp:include page="../view/fragments/footer.jsp" /></div>
</body>
</html>