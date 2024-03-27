const menüBtn = document.querySelector(".mobil-menu-button");
const menü = document.querySelector(".mobil-menu");
menüBtn.addEventListener("click", () => {
  menü.classList.toggle("hidden");
});

$(".reviews").owlCarousel({
  loop: true,
  margin: 10,
  items: 1,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
});

$(".minikayaklar").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-chevron-left text-start'></i>",
    "<i class='fa fa-chevron-right text-end'></i>",
  ],
  dots: false,
  responsive: {
    0: { items: 1, nav: true },
    600: { items: 3, nav: false },
    1000: { items: 5, nav: true, loop: false },
  },
});

$(".tours").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  navText: [
    "<i class='fa fa-chevron-left text-start'></i>",
    "<i class='fa fa-chevron-right text-end'></i>",
  ],
  dots: false,
  responsive: {
    0: { items: 1, nav: true },
    600: { items: 2, nav: false },
    1000: { items: 3, nav: true, loop: false },
  },
});

new Accordion(".accordion-container");

const datepicker = flatpickr("#date-picker", {});

// styling the date picker
const calendarContainer = datepicker.calendarContainer;
const calendarMonthNav = datepicker.monthNav;
const calendarNextMonthNav = datepicker.nextMonthNav;
const calendarPrevMonthNav = datepicker.prevMonthNav;
const calendarDaysContainer = datepicker.daysContainer;

calendarContainer.className = `${calendarContainer.className} bg-white p-4 border border-blue-gray-50 rounded-lg shadow-lg shadow-blue-gray-500/10 font-sans text-sm font-normal text-blue-gray-500 focus:outline-none break-words whitespace-normal`;

calendarMonthNav.className = `${calendarMonthNav.className} flex items-center justify-between mb-4 [&>div.flatpickr-month]:-translate-y-3`;

calendarNextMonthNav.className = `${calendarNextMonthNav.className} absolute !top-2.5 !right-1.5 h-6 w-6 bg-transparent hover:bg-blue-gray-50 !p-1 rounded-md transition-colors duration-300`;

calendarPrevMonthNav.className = `${calendarPrevMonthNav.className} absolute !top-2.5 !left-1.5 h-6 w-6 bg-transparent hover:bg-blue-gray-50 !p-1 rounded-md transition-colors duration-300`;

calendarDaysContainer.className = `${calendarDaysContainer.className} [&_span.flatpickr-day]:!rounded-md [&_span.flatpickr-day.selected]:!bg-gray-900 [&_span.flatpickr-day.selected]:!border-gray-900`;
