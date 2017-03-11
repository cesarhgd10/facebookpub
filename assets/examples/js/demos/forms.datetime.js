$(function() {
   ! function() {
      $("#daterange-ex-2").daterangepicker({
         timePicker: !0,
         timePickerIncrement: 30,
         locale: {
            format: "DD/MM/YYYY h:mm A"
         }
      }), $("#daterange-ex-3").daterangepicker({
         singleDatePicker: !0,
         showDropdowns: !0
      }, function(t, e, n) {
         var a = moment().diff(t, "years");
      }),
      $("#dt-picker").daterangepicker({
         singleDatePicker: !0,
         showDropdowns: !0
      }, function(t, e, n) {
         var a = moment().diff(t, "years");
      })
   }(),
   function() {
      function t(t, e) {
         $("#daterange-ex-4 span").html(t.format("MMMM D, YYYY") + " - " + e.format("MMMM D, YYYY"))
      }
      var e = moment().subtract(29, "days"),
         n = moment();
      $("#daterange-ex-4").daterangepicker({
         startDate: e,
         endDate: n,
         ranges: {
            Today: [moment(), moment()],
            Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
            "Last 7 Days": [moment().subtract(6, "days"), moment()],
            "Last 30 Days": [moment().subtract(29, "days"), moment()],
            "This Month": [moment().startOf("month"), moment().endOf("month")],
            "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
         }
      }, t), t(e, n)
   }(),
   function() {
      $("#hora-programacao").clockpicker({
         placement: "right",
         align: "left",
         donetext: "Inserir"
      })
   }(),
   function() {
      var t = $("#single-input").clockpicker({
         placement: "bottom",
         align: "left",
         autoclose: !0,
         default: "now"
      });
      $("#check-minutes").click(function(e) {
         e.stopPropagation(), t.clockpicker("show").clockpicker("toggleView", "minutes")
      })
   }()
});