

window.onscroll = function () {
    scroll();
}

function scroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("headerPlumbing").classList.add("scrollChange");
    } else {
        document.getElementById("headerPlumbing").classList.remove("scrollChange");
    }
}




const data = [
    {
        plumbLogo: `E:/Java/humoyun/Portfolio/project1Santexnik/img/plumbing.png`,
        plumbHeader: `Ремонт и замена сантехники`,
        plumb1: `Монтаж и замена труб`,
        plumb2: `Замена и ремонт смесителей`,
        plumb3: `Установка раковин и унитазов`,
        plumb4: `Установка и монтаж душевых кабин`,
        plumb5: `Установка водонагревателя`,
        plumb6: `Установка и монтаж ванны`,
        plumb7: ` Установка стиральных машин`,
        backColor: `background: -moz-linear-gradient(134deg, #2C3752 35%, #1D4470 63%);/* FF3.6+ */
        background: -webkit-gradient(linear, 134deg, color-stop(35%, 2C3752), color-stop(63%, 1D4470));/* Chrome,Safari4+ */
        background: -webkit-linear-gradient(134deg, #2C3752 35%, #1D4470 63%);/* Chrome10+,Safari5.1+ */
        background: -o-linear-gradient(134deg, #2C3752 35%, #1D4470 63%);/* Opera 11.10+ */
        background: -ms-linear-gradient(134deg, #2C3752 35%, #1D4470 63%);/* IE10+ */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1301FE', endColorstr='#F4F60C', GradientType='1'); /* for IE */
        background: linear-gradient(134deg, #2C3752 35%, #1D4470 63%);`,
        animation: `data-aos="fade-down"`
    },
    {
        plumbLogo: `E:/Java/humoyun/Portfolio/project1Santexnik/img/heatingplumb.png`,
        plumbHeader: `Отопление`,
        plumb1: `Твердотопливные котлы`,
        plumb2: `Газовые котлы`,
        plumb3: `Электрические котлы`,
        plumb4: ` Теплые полы`,
        plumb5: `Монтаж котельной`,
        plumb6: ` Батареи отопления`,
        plumb7: `  Монтаж отопления в квартирах и домах`,
        backColor: `background: -moz-linear-gradient(134deg, #515722 35%, #706D19 63%);/* FF3.6+ */
        background: -webkit-gradient(linear, 134deg, color-stop(35%, 515722), color-stop(63%, 706D19));/* Chrome,Safari4+ */
        background: -webkit-linear-gradient(134deg, #515722 35%, #706D19 63%);/* Chrome10+,Safari5.1+ */
        background: -o-linear-gradient(134deg, #515722 35%, #706D19 63%);/* Opera 11.10+ */
        background: -ms-linear-gradient(134deg, #515722 35%, #706D19 63%);/* IE10+ */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1301FE', endColorstr='#F4F60C', GradientType='1'); /* for IE */
        background: linear-gradient(134deg, #515722 35%, #706D19 63%);/* W3C */`,
        animation: `data-aos="fade-down"`,

    },
    {
        plumbLogo: `E:/Java/humoyun/Portfolio/project1Santexnik/img/waterservice.png`,
        plumbHeader: `Водоснабжение`,
        plumb1: ` Насосные станции`,
        plumb2: ` Погружные насосы`,
        plumb3: `Летний водопровод`,
        plumb4: ` Монтаж труб водоснабжения в квартирах и домax`,
        plumb5: `Установка водоочистки`,
        plumb6: ` Обслуживание оборудования`,
        plumb7: `  Установка счетчиков`,
        backColor: `background: -moz-linear-gradient(134deg, #5D5DC2 35%, #1162BF 63%);/* FF3.6+ */
        background: -webkit-gradient(linear, 134deg, color-stop(35%, 5D5DC2), color-stop(63%, 1162BF));/* Chrome,Safari4+ */
        background: -webkit-linear-gradient(134deg, #5D5DC2 35%, #1162BF 63%);/* Chrome10+,Safari5.1+ */
        background: -o-linear-gradient(134deg, #5D5DC2 35%, #1162BF 63%);/* Opera 11.10+ */
        background: -ms-linear-gradient(134deg, #5D5DC2 35%, #1162BF 63%);/* IE10+ */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1301FE', endColorstr='#F4F60C', GradientType='1'); /* for IE */
        background: linear-gradient(134deg, #5D5DC2 35%, #1162BF 63%);/* W3C */`,
        animation: `data-aos="fade-down"`
    },
]

const plumBody = document.getElementById("plumBody");
const plumbFunction = () => {

    data.map((value, index) => {
        const div = document.createElement(`div`);

        div.classList = ` offset-1 col-10 offset-sm-1 col-sm-10 offset-md-1 col-md-10 offset-lg-0 col-lg-4 offset-xl-0 col-xl-4 mb-4`;
        div.innerHTML = ` <div  data-aos-duration="2000" ${value.animation} style="background-color: ${value.backColor};" class="card-plumb-servise shadow">
        <div class="text-center"><img class="card-plumb-logo" src="${value.plumbLogo}" alt=""></div>
        <h4 class="header-title fw-bold">${value.plumbHeader}</h4>
        <ul class="list-group ">
            <li><a href="#"><i class="text-warning fas fa-chevron-circle-right me-1"></i> ${value.plumb1}</a></li>
            <li><a href="#"><i class="text-warning fas fa-chevron-circle-right me-1"></i>${value.plumb2}</a></li>
            <li><a href="#"><i class="text-warning fas fa-chevron-circle-right me-1"></i>${value.plumb3}</a></li>
            <li><a href="#"><i class="text-warning fas fa-chevron-circle-right me-1"></i>${value.plumb4}</a></li>
            <li><a href="#"><i class="text-warning fas fa-chevron-circle-right me-1"></i>${value.plumb5}</a></li>
            <li><a href="#"><i class="text-warning fas fa-chevron-circle-right me-1"></i>${value.plumb6}</a></li>
            <li><a href="#"><i class="text-warning fas fa-chevron-circle-right me-1"></i>${value.plumb7}</a></li>
           
        </ul>
    </div>`;
        plumBody.appendChild(div);
    })
    AOS.init();
};

plumbFunction();

const btnRead = () => {
    const btn = document.getElementById("btnRead").classList.add("d-none");
};
const btnBars = document.getElementById("btnBars");
const btnHide = () => {
    btnBars.classList.add("barsStyle")
}
const btnNone = () => {
    btnBars.classList.remove("barsStyle")
}