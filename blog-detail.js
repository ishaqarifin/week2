
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) =>searchParams.get(prop)
})
let value = params.judul;
let imag = params.images;
// image = URL.createObjectURL(image.files[0])
let star = params.start;
let end = params.end;
let dm = params.dm;
let icon = params.icon;
let diffMonth = params.diffMonth;
let content = params.content;


let test = document.getElementById('as')
    test.innerHTML = `
    <div class="blog-detail">
      <div class="blog-detail-container" id="as">
        <h1>${value}</h1>
        <div class="wrapper">
          <div class="left">
            ${imag}
          </div>
          <div class="right">
            <div class="duration">
              <p>Duration</p>
              <span><i class="far fa-clock"></i> ${star} s/d  ${end}</span>
              <span><i class="far fa-calendar"></i> ${diffMonth} month - ${dm} day</span>
            </div>
            <div class="technologies">
              <p>Technologies</p>
              <div class="item-tech">${icon}</div>
            </div>
          </div>
        </div>
        <p>
          ${content}
        </p>
      </div>
    </div>`

console.log(icon);
