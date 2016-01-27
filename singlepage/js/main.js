$(document).ready(
		function() {
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