$(document).ready(
		function() {

			$('#admin-excluir-pessoa').on(
					'show.bs.modal',
					function(e) {
						$(this).find('.modal-body').text(
								'Tem certeza de que deseja excluir '
										+ $(e.relatedTarget).data('name')
										+ '\"?');
						$(this).find('.btn-danger').attr('href',
								$(e.relatedTarget).data('href'));
					});

			$(function() {
				$("#datepicker").datepicker();
			});

			$("#datepicker").datepicker({
				format : "dd/mm/yyyy",
				todayBtn : "linked",
				language : "pt-BR",
				todayHighlight : true,
			}).on(
					'changeDate',
					function(e) {
						$(this).datepicker('hide');
						$('#adicionarRodadaForm').bootstrapValidator(
								'revalidateField', 'inicio');
						$('#adicionarRodadaForm').bootstrapValidator(
								'revalidateField', 'termino');
						$('#adicionarRodadaForm').bootstrapValidator(
								'revalidateField', 'prazoSubmissao');
						$('#adicionarRodadaForm').bootstrapValidator(
								'revalidateField', 'terminoAvaliacao');
					});
		});