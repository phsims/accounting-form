  jQuery(document).ready(function($) {

    jQuery("#total").val("380");
	jQuery("#turnover1").val('100,000 - 200,000');
	jQuery("#priceCo").val("0");
	jQuery("#quoteTotal").val("0");
    jQuery( function() {
        var t = { 
			0:"0",
			1:"1",
			2:"2",
			3:"3",
			4:"4",
			5:"5",
			6:"6",
			7:"7",
			8:"8",
			9:"9",
			10:"10"
        }
   
         jQuery("#slider-range-min").slider({
            range: "min",
            value: "0",
            min: 0,
            max: 9,
            step: 0,
            slide: function(event, ui) {
				var aaa = jQuery("#step1").val();
                jQuery("#step1").val(t[ui.value]);
				
				//ouput for turnover
				if (jQuery("#step1").val() <= 1) {
					jQuery("#turnover1").val('0 - 10,000');
				} else if (jQuery("#step1").val() <= 2) {
					jQuery("#turnover1").val('10,000 - 50,000');
				} else if (jQuery("#step1").val() <= 3) {
					jQuery("#turnover1").val('50,000 - 100,000');
				} else if (jQuery("#step1").val() <= 4) {
					jQuery("#turnover1").val('100,000 - 200,000');
				} else if (jQuery("#step1").val() <= 5) {
					jQuery("#turnover1").val('200,000 - 350,000');
				} else if (jQuery("#step1").val() <= 6) {
					jQuery("#turnover1").val('350,000 - 500,000');
				} else if (jQuery("#step1").val() <= 7) {
					jQuery("#turnover1").val('500,000 - 750,000');
				} else if (jQuery("#step1").val() <= 8) {
					jQuery("#turnover1").val('750,000 - 1,000,000');
				} else if (jQuery("#step1").val() <= 9) {
					jQuery("#turnover1").val('1,000,000 - 2,000,000');
				} else if (jQuery("#step1").val() <= 10) {
					jQuery("#turnover1").val('2,000,000 - 3,000,000');
				} else if (jQuery("#step1").val() <= 11) {
					jQuery("#turnover1").val('3,000,000 - 5,000,000');
				}
				//Cost for sole trader
				if (jQuery("#step1").val() <= 1) {
					jQuery("#priceS").val('257');
				} else if (jQuery("#step1").val() <= 2) {
					jQuery("#priceS").val('341');
				} else if (jQuery("#step1").val() <= 3) {
					jQuery("#priceS").val('414');
				} else if (jQuery("#step1").val() <= 4) {
					jQuery("#priceS").val('498');
				} else if (jQuery("#step1").val() <= 5) {
					jQuery("#priceS").val('632');
				} else if (jQuery("#step1").val() <= 6) {
					jQuery("#priceS").val('764');
				} else if (jQuery("#step1").val() <= 7) {
					jQuery("#priceS").val('918');
				} else if (jQuery("#step1").val() <= 8) {
					jQuery("#priceS").val('1094');
				} else if (jQuery("#step1").val() <= 9) {
					jQuery("#priceS").val('1424');
				} else if (jQuery("#step1").val() <= 10) {
					jQuery("#priceS").val('1709');
				} else if (jQuery("#step1").val() <= 11) {
					jQuery("#priceS").val('2051');
				}
				//Cost for partnership
				if (jQuery("#step1").val() <= 1) {
					jQuery("#priceP").val('414');
				} else if (jQuery("#step1").val() <= 2) {
					jQuery("#priceP").val('498');
				} else if (jQuery("#step1").val() <= 3) {
					jQuery("#priceP").val('572');
				} else if (jQuery("#step1").val() <= 4) {
					jQuery("#priceP").val('656');
				} else if (jQuery("#step1").val() <= 5) {
					jQuery("#priceP").val('797');
				} else if (jQuery("#step1").val() <= 6) {
					jQuery("#priceP").val('929');
				} else if (jQuery("#step1").val() <= 7) {
					jQuery("#priceP").val('1083');
				} else if (jQuery("#step1").val() <= 8) {
					jQuery("#priceP").val('1259');
				} else if (jQuery("#step1").val() <= 9) {
					jQuery("#priceP").val('1490');
				} else if (jQuery("#step1").val() <= 10) {
					jQuery("#priceP").val('1788');
				} else if (jQuery("#step1").val() <= 11) {
					jQuery("#priceP").val('2146');
				}	
				//Cost for limited
				if (jQuery("#step1").val() <= 1) {
					jQuery("#priceL").val('519');
				} else if (jQuery("#step1").val() <= 2) {
					jQuery("#priceL").val('624');
				} else if (jQuery("#step1").val() <= 3) {
					jQuery("#priceL").val('729');
				} else if (jQuery("#step1").val() <= 4) {
					jQuery("#priceL").val('876');
				} else if (jQuery("#step1").val() <= 5) {
					jQuery("#priceL").val('1061');
				} else if (jQuery("#step1").val() <= 6) {
					jQuery("#priceL").val('1204');
				} else if (jQuery("#step1").val() <= 7) {
					jQuery("#priceL").val('1380');
				} else if (jQuery("#step1").val() <= 8) {
					jQuery("#priceL").val('1589');
				} else if (jQuery("#step1").val() <= 9) {
					jQuery("#priceL").val('1754');
				} else if (jQuery("#step1").val() <= 10) {
					jQuery("#priceL").val('2105');
				} else if (jQuery("#step1").val() <= 11) {
					jQuery("#priceL").val('2526.48');
				}

				if (jQuery("select[name=bizType]").val() == 0) {
					jQuery("#priceCo").val("0");
				} else if (jQuery("select[name=bizType]").val() == 1) {
					var priceS = jQuery("#priceS").val();
					jQuery("#priceCo").val(+priceS);
				} else if (jQuery("select[name=bizType]").val() == 2) {
					var priceP = jQuery("#priceP").val();
					jQuery("#priceCo").val(+priceP);
				} else if (jQuery("select[name=bizType]").val() == 3) {
					var priceL = jQuery("#priceL").val();
					jQuery("#priceCo").val(+priceL);
				}
		var priceCo = jQuery("#priceCo").val(),
			hmrc = jQuery("#hmrc").val(),
			priceBook = jQuery("#priceBook").val(),
			vat = jQuery("#vat").val(),
			pricpayTotaleCo = jQuery("#payTotal").val(),
			paye = jQuery("#paye").val(),
			coSetup1 = jQuery("#coSetup1").val(),
			office = jQuery("#office").val(),
			secretary = jQuery("#secretary").val(),
			annualreturn = jQuery("#annualreturn").val(),
			personaltax = jQuery("#personaltax").val(),
			landtax = jQuery("#landtax").val(),
			hmrcP = jQuery("#hmrcP").val(),
			refForms = jQuery("#refForms").val();
		jQuery("#quoteTotalY").val( +Number(priceCo) + Number(hmrc) + Number(priceBook) + Number(vat) + Number(pricpayTotaleCo) + Number(paye) + Number(coSetup1) + Number(office) + Number(secretary) + Number(annualreturn) + Number(personaltax) + Number(hmrcP) + Number(landtax) + Number(refForms));
		jQuery("#quoteTotalM").val( parseFloat ((Number(priceCo) + Number(hmrc) + Number(priceBook) + Number(vat) + Number(pricpayTotaleCo) + Number(paye) + Number(coSetup1) + Number(office) + Number(secretary) + Number(annualreturn) + Number(personaltax) + Number(hmrcP) + Number(landtax) + Number(refForms)) / 12).toFixed(2));					
            }		
        });
    });

	$('select[name=bizType]').change(function() {
				if (jQuery("select[name=bizType]").val() == 0) {
					jQuery("#priceCo").val("0");
					document.getElementById("bizTable").className = "hidden";
					document.getElementById("bizType1").className = "hidden";
					document.getElementById("sole").className = "hidden";
					document.getElementById("partner").className = "hidden";
					document.getElementById("ltd").className = "hidden";
					document.getElementById("bizType2").className = "hidden";
					document.getElementById("sole1").className = "hidden";
					document.getElementById("partner1").className = "hidden";
					document.getElementById("ltd1").className = "hidden";					
				} else if (jQuery("select[name=bizType]").val() == 1) {
					var priceS = jQuery("#priceS").val();
					jQuery("#priceCo").val(+priceS);				
					document.getElementById("bizTable").className = "";
					document.getElementById("bizType1").className = "";
					document.getElementById("sole").className = "";
					document.getElementById("partner").className = "hidden";
					document.getElementById("ltd").className = "hidden";	
					document.getElementById("bizType2").className = "";
					document.getElementById("sole1").className = "";
					document.getElementById("partner1").className = "hidden";
					document.getElementById("ltd1").className = "hidden";						
				} else if (jQuery("select[name=bizType]").val() == 2) {
					var priceP = jQuery("#priceP").val();
					jQuery("#priceCo").val(+priceP);
					document.getElementById("bizTable").className = "";
					document.getElementById("bizType1").className = "";
					document.getElementById("sole").className = "hidden";
					document.getElementById("partner").className = "";
					document.getElementById("ltd").className = "hidden";	
					document.getElementById("bizType2").className = "";
					document.getElementById("sole1").className = "hidden";
					document.getElementById("partner1").className = "";
					document.getElementById("ltd1").className = "hidden";						
				} else if (jQuery("select[name=bizType]").val() == 3) {
					var priceL = jQuery("#priceL").val();
					jQuery("#priceCo").val(+priceL);
					document.getElementById("bizTable").className = "";
					document.getElementById("bizType1").className = "";
					document.getElementById("sole").className = "hidden";
					document.getElementById("partner").className = "hidden";
					document.getElementById("ltd").className = "";
					document.getElementById("bizType2").className = "";
					document.getElementById("sole1").className = "hidden";
					document.getElementById("partner1").className = "hidden";
					document.getElementById("ltd1").className = "";							
				}
	});	
	$('select[name=bizType]').change(function() {
		if ($('input[name=hmrc1]').is(':checked')) {
			if (jQuery("select[name=bizType]").val() == 1) {
				jQuery("#hmrc").val('40');
			} else if (jQuery("select[name=bizType]").val() == 2) {
				jQuery("#hmrc").val('50');
			} else if (jQuery("select[name=bizType]").val() == 3) {
				jQuery("#hmrc").val('80');
			} else if (jQuery("select[name=bizType]").val() == 0) {
				jQuery("#hmrc").val('0');
			} 
		} else {
			jQuery("#hmrc").val('0');
		}
	});	

	$('input[name=hmrc1]').change(function() { 
		if ($(this).is(':checked')) {
			if (jQuery("select[name=bizType]").val() == 1) {
				jQuery("#hmrc").val('40');
			} else if (jQuery("select[name=bizType]").val() == 2) {
				jQuery("#hmrc").val('50');
			} else if (jQuery("select[name=bizType]").val() == 3) {
				jQuery("#hmrc").val('80');
			} else if (jQuery("select[name=bizType]").val() == 0) {
				jQuery("#hmrc").val('0');
			} 
		} else {
			jQuery("#hmrc").val('0');
		}
	})
	$('input[name=book]').change(function() { 
		if ($(this).is(':checked')) {
			document.getElementById("bookkeeping").className = "vis";
		} else {
			document.getElementById("bookkeeping").className = "hidden";
			jQuery("#priceBook").val('');
		}
	})
	$('select[name=bookkeeping]').change(function() {
		jQuery("#priceBook").val('400');
		if (jQuery("select[name=bookkeeping]").val() == 1) {
			jQuery("#priceBook").val('400');
		} else if (jQuery("select[name=bookkeeping]").val() == 2) {
			jQuery("#priceBook").val('600');
		} else if (jQuery("select[name=bookkeeping]").val() == 3) {
			jQuery("#priceBook").val('900');
		} else if (jQuery("select[name=bookkeeping]").val() == 4) {
			jQuery("#priceBook").val('1200');
		} else if (jQuery("select[name=bookkeeping]").val() == 5) {
			jQuery("#priceBook").val('1500');
		} else if (jQuery("select[name=bookkeeping]").val() == 0) {
			jQuery("#priceBook").val('');
		}
	});	
	$('input[name=book1]').change(function() { 
		if ($(this).is(':checked')) {
			jQuery("#vat").val('200');
		} else {
			jQuery("#vat").val('0');
		}
	})
	$('input[name=payroll]').change(function() { 
		if ($(this).is(':checked')) {
			document.getElementById("payroll").className = "vis";
			document.getElementById("payroll1").className = "vis";
		} else {
			document.getElementById("payroll").className = "hidden";
			document.getElementById("payroll1").className = "hidden";
		}
	})
	$('input[name=payW]').change(function() { 
		var payW = jQuery("#payW").val();
		jQuery("#payCost").val(parseFloat(+payW * 2 * 12).toFixed());		
	})
	$('input[name=payW], select[name=payrollO]').change(function() {
		var payCost = jQuery("#payCost").val();
		if (jQuery("select[name=payrollO]").val() == 1) {
			 jQuery("#paySub").val(parseFloat(+payCost ).toFixed());
		} else if (jQuery("select[name=payrollO]").val() == 2) {
			jQuery("#paySub").val(parseFloat(+payCost ).toFixed());
		} else if (jQuery("select[name=payrollO]").val() == 3) {
			jQuery("#paySub").val('195');
		} else if (jQuery("select[name=payrollO]").val() == 0) {
			jQuery("#paySub").val('0');
		} 
	});	
	$('input[name=payW], select[name=payrollO]').change(function() {
		if (jQuery("select[name=payrollO]").val() == 1) {
			if (jQuery("#paySub").val() == 0) {
				var paySub = jQuery("#paySub").val();
				jQuery("#payTotal").val('0');
				
			} else if (jQuery("#paySub").val() <= 274) {
				var paySub = jQuery("#paySub").val();
				jQuery("#payTotal").val(275);
			} else if (jQuery("#paySub").val() >= 275) {
				var paySub = jQuery("#paySub").val();
				jQuery("#payTotal").val(+paySub);
			}
			document.getElementById("payW").className = "boxOut h5";	
		} else if (jQuery("select[name=payrollO]").val() == 2) {
			if (jQuery("#paySub").val() == 0) {
				var paySub = jQuery("#paySub").val();
				jQuery("#payTotal").val('0');
			} else if (jQuery("#paySub").val() <= 374) {
				var paySub = jQuery("#paySub").val();
				jQuery("#payTotal").val(375);
			} else if (jQuery("#paySub").val() >= 375) {
				var paySub = jQuery("#paySub").val();
				jQuery("#payTotal").val(+paySub);
			} 
			document.getElementById("payW").className = "boxOut h5";	
		} else if (jQuery("select[name=payrollO]").val() == 3) {
				jQuery("#payTotal").val('195');	
				document.getElementById("payW").className = "hidden";				
		} else if (jQuery("select[name=payrollO]").val() == 0) {
			jQuery("#payTotal").val('0');
			document.getElementById("payW").className = "hidden";
		} 
	});	
	$('input[name=protect]').change(function() { 
		if ($(this).is(':checked')) {
			jQuery("#paye").val('35');
		} else {
			jQuery("#paye").val('0');
		}
	})
	$('input[name=regOffice]').change(function() { 
		if ($(this).is(':checked')) {
			jQuery("#office").val('50');
		} else {
			jQuery("#office").val('0');
		}
	})
	$('input[name=secretaryCheck]').change(function() { 
		if ($(this).is(':checked')) {
			jQuery("#secretary").val('50');
		} else {
			jQuery("#secretary").val('0');
		}
	})
	$('input[name=returnCheck]').change(function() { 
		if ($(this).is(':checked')) {
			jQuery("#annualreturn").val('50');
		} else {
			jQuery("#annualreturn").val('0');
		}
	})
	$('input[name=personalCheck]').change(function() { 
		if ($(this).is(':checked')) {
			jQuery("#personaltax").val('95');
		} else {
			jQuery("#personaltax").val('0');
		}
	})
	$('input[name=companyCheck]').change(function() { 	
		if ($(this).is(':checked')) {
			var payCost = jQuery("#payCost").val();
			if (jQuery("select[name=coSetup]").val() == 1) {
				jQuery("#coSetup1").val('95');
			} else if (jQuery("select[name=coSetup]").val() == 2) {
				jQuery("#coSetup1").val('145');
			} else if (jQuery("select[name=coSetup]").val() == 0) {
				jQuery("#coSetup1").val('0');
			} 
			document.getElementById("coSetup").className = "";
		} else {
			document.getElementById("coSetup").className = "hidden";
			jQuery("#coSetup1").val('0');
		}
	})
	$('select[name=coSetup]').change(function() {
		var payCost = jQuery("#payCost").val();
		if (jQuery("select[name=coSetup]").val() == 1) {
			jQuery("#coSetup1").val('95');
		} else if (jQuery("select[name=coSetup]").val() == 2) {
			jQuery("#coSetup1").val('145');
		} else if (jQuery("select[name=coSetup]").val() == 0) {
			jQuery("#coSetup1").val('0');
		} 
	});
	$('input[name=landCheck], input[name=property]').change(function() { 
		if ($('input[name=landCheck]').is(':checked')) {
			var property = jQuery("#property").val();
			jQuery("#landtax").val(+property * 95);
			document.getElementById("property").className = "boxOut h5";
		} else {
			jQuery("#landtax").val('0');
			document.getElementById("property").className = "hidden";
		}
	})	
	$('input[name=hmrcPCheck]').change(function() { 
		if ($('input[name=hmrcPCheck]').is(':checked')) {
			jQuery("#hmrcP").val('25');
		} else {
			jQuery("#hmrcP").val('0');
		}
	})	
	$('input[name=refCheck], input[name=references]').change(function() { 
		if ($('input[name=refCheck]').is(':checked')) {
			var references = jQuery("#references").val();
			jQuery("#refForms").val(+references * 40);
			document.getElementById("references").className = "boxOut h5";
		} else {
			jQuery("#refForms").val('0');
			document.getElementById("references").className = "hidden";
		}
	})	
	$('input[name=companyCheck], input[name=step1], input[name=priceCo], input[name=personalCheck], input[name=returnCheck], input[name=secretaryCheck], input[name=regOffice], input[name=protect], input[name=payW], select[name=payrollO], input[name=payroll], input[name=book1], select[name=bookkeeping], input[name=book], input[name=hmrc1], select[name=bizType], input[name=refCheck], input[name=references], input[name=hmrcPCheck], input[name=landCheck], input[name=property], select[name=coSetup], input[name=companyCheck]').change(function() { 
		var priceCo = jQuery("#priceCo").val(),
			hmrc = jQuery("#hmrc").val(),
			priceBook = jQuery("#priceBook").val(),
			vat = jQuery("#vat").val(),
			pricpayTotaleCo = jQuery("#payTotal").val(),
			paye = jQuery("#paye").val(),
			coSetup1 = jQuery("#coSetup1").val(),
			office = jQuery("#office").val(),
			secretary = jQuery("#secretary").val(),
			annualreturn = jQuery("#annualreturn").val(),
			personaltax = jQuery("#personaltax").val(),
			landtax = jQuery("#landtax").val(),
			hmrcP = jQuery("#hmrcP").val(),
			refForms = jQuery("#refForms").val();
		jQuery("#quoteTotalY").val( Number(priceCo) + Number(hmrc) + Number(priceBook) + Number(vat) + Number(pricpayTotaleCo) + Number(paye) + Number(coSetup1) + Number(office) + Number(secretary) + Number(annualreturn) + Number(personaltax) + Number(hmrcP) + Number(landtax) + Number(refForms));
		jQuery("#quoteTotalM").val( parseFloat ((Number(priceCo) + Number(hmrc) + Number(priceBook) + Number(vat) + Number(pricpayTotaleCo) + Number(paye) + Number(coSetup1) + Number(office) + Number(secretary) + Number(annualreturn) + Number(personaltax) + Number(hmrcP) + Number(landtax) + Number(refForms)) / 12).toFixed(2));
	})	

}); 



function emailCurrentPage(){
	var priceCo = jQuery("#priceCo").val(),
			hmrc = jQuery("#hmrc").val(),
			priceBook = jQuery("#priceBook").val(),
			vat = jQuery("#vat").val(),
			pricpayTotaleCo = jQuery("#payTotal").val(),
			paye = jQuery("#paye").val(),
			coSetup1 = jQuery("#coSetup1").val(),
			office = jQuery("#office").val(),
			secretary = jQuery("#secretary").val(),
			annualreturn = jQuery("#annualreturn").val(),
			personaltax = jQuery("#personaltax").val(),
			landtax = jQuery("#landtax").val(),
			hmrcP = jQuery("#hmrcP").val(),
			refForms = jQuery("#refForms").val(),
			quoteTotalY = document.getElementById('quoteTotalY').value,
			quoteTotalM = document.getElementById('quoteTotalM').value,
			email = document.getElementById('emailto').value;
	window.location.href="mailto:"+email+"?subject=Your quote from Yorkshire Accountancy&body=Your quote is for £"+quoteTotalY+" per year or  £"+quoteTotalM+" per month";

}	