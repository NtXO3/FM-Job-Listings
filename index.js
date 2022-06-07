const jobsEl = document.querySelector('.jobs')
const filterBarEl = document.querySelector('.filters__wrapper')
const clearFil = document.getElementById('clear')
const removeFilterButtons = document.querySelectorAll('.remove-filter__btn')

let filters = []
let jobs;


function removeFilter(val) {
    console.log(val)
}

async function renderJobs() {
    jobsEl.innerHTML = 'Loading'
    
    jobs = await getJobs()

    if (filters.length > 0) {
        jobs = jobs.filter(item => {
            itemTags = [item.role, item.level]
            item.languages.map(lang => itemTags.push(lang))
            item.tools.map(tool => itemTags.push(tool))
            console.log(itemTags)
            console.log(itemTags.some((_, i) => filters.includes(itemTags[i])))
            return filters.every((_, i) => itemTags.includes(filters[i]))
        })
        console.log(filters)
    }
    
    const jobsHTML = jobs.map(item => (
        `
        <div class="job__wrapper">
        ${
          item.featured ? `<div class='bar__side'></div>` : ""
        }
          <div class="job__info">
            <figure class="job__img--wrapper">
              <img src='${item.logo}' alt="" class="job__img">
            </figure>
            <div class="job__description">
              <div class="job__top">
                <h1 class="job__company">${item.company}</h1>
                ${
                    item.new ? `<div class="job__tag tag__new">NEW!</div>` : ''
                }
                ${
                    item.featured ? `<div class="job__tag tag__featured">FEATURED</div>` : ''
                }
              </div>
              <h2 class="job__title">${item.position}</h2>
              <div class="job__more--info">
                <p class="job__more--para">${item.postedAt}</p>
                <div class="job__more--dot"></div>
                <p class="job__more--para">${item.contract}</p>
                <div class="job__more--dot"></div>
                <p class="job__more--para">${item.location}</p>
              </div>
            </div>
          </div>
          <div class='mobile__divider'></div>
          <div class="job__tags">
            <button class="job__filter--btn" onclick='addFilter(event)'>
              ${item.role}
            </button>
            <button class="job__filter--btn" onclick='addFilter(event)'>
              ${item.level}
            </button>
            ${
                item.languages.map(language => (
                    `<button class="job__filter--btn" onclick='addFilter(event)'>
                    ${language}
                    </button>`
                  )).join('')
              }
              ${
                  item.tools.map(tool => (
                      `<button class="job__filter--btn" onclick='addFilter(event)'>
                          ${tool}
                      </button>`
                  )).join('')
              }
          </div>
      </div>
      `
    )).join('')

    if (filters.length === 0) {
        filterBarEl.innerHTML = `<p class='filters__para'>You have no filters selected</p>`
    } else {
        filterBarEl.innerHTML = filters.map(item => (
            `
                <div class='filter'>
                    ${item}
                    <button class='remove-filter__btn' onclick='removeFilter("${item}")'><i class='fas fa-times'></i></button>
                </div>
            `
        )).join('')
    }

    jobsEl.innerHTML = jobsHTML
}

clearFil.addEventListener('click', () => {
    filters = []
    renderJobs()
})

function addFilter(e) {
    console.log(e.target.innerText)
    const filter = e.target.innerText
    if (!filters.includes(filter)) {
        filters.push(filter)
    }
    renderJobs()
}

function removeFilter(e) {
    console.log(e)
    filters = filters.filter(item => item !== e)
    console.log(filters.includes(e))
    renderJobs()
}

renderJobs()

function getJobs() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                [
                    {
                      id: 1,
                      company: "Photosnap",
                      logo: "./assets/photosnap.svg",
                      new: true,
                      featured: true,
                      position: "Senior Frontend Developer",
                      role: "Frontend",
                      level: "Senior",
                      postedAt: "1d ago",
                      contract: "Full Time",
                      location: "USA Only",
                      languages: [
                        "HTML",
                        "CSS",
                        "JavaScript"
                      ],
                      tools: []
                    },
                    {
                      id: 2,
                      company: "Manage",
                      logo: "./assets/manage.svg",
                      new: true,
                      featured: true,
                      position: "Fullstack Developer",
                      role: "Fullstack",
                      level: "Midweight",
                      postedAt: "1d ago",
                      contract: "Part Time",
                      location: "Remote",
                      languages: [
                        "Python"
                      ],
                      tools: [
                        "React"
                      ]
                    },
                    {
                      id: 3,
                      company: "Account",
                      logo: "./assets/account.svg",
                      new: true,
                      featured: false,
                      position: "Junior Frontend Developer",
                      role: "Frontend",
                      level: "Junior",
                      postedAt: "2d ago",
                      contract: "Part Time",
                      location: "USA Only",
                      languages: [
                        "JavaScript"
                      ],
                      tools: [
                        "React",
                        "Sass"
                      ]
                    },
                    {
                      id: 4,
                      company: "MyHome",
                      logo: "./assets/myhome.svg",
                      new: false,
                      featured: false,
                      position: "Junior Frontend Developer",
                      role: "Frontend",
                      level: "Junior",
                      postedAt: "5d ago",
                      contract: "Contract",
                      location: "USA Only",
                      languages: [
                        "CSS",
                        "JavaScript"
                      ],
                      tools: []
                    },
                    {
                      id: 5,
                      company: "Loop Studios",
                      logo: "./assets/loop-studios.svg",
                      new: false,
                      featured: false,
                      position: "Software Engineer",
                      role: "Fullstack",
                      level: "Midweight",
                      postedAt: "1w ago",
                      contract: "Full Time",
                      location: "Worldwide",
                      languages: [
                        "JavaScript"
                      ],
                      tools: [
                        "Ruby",
                        "Sass"
                      ]
                    },
                    {
                      id: 6,
                      company: "FaceIt",
                      logo: "./assets/faceit.svg",
                      new: false,
                      featured: false,
                      position: "Junior Backend Developer",
                      role: "Backend",
                      level: "Junior",
                      postedAt: "2w ago",
                      contract: "Full Time",
                      location: "UK Only",
                      languages: [
                        "Ruby"
                      ],
                      tools: [
                        "RoR"
                      ]
                    },
                    {
                      id: 7,
                      company: "Shortly",
                      logo: "./assets/shortly.svg",
                      new: false,
                      featured: false,
                      position: "Junior Developer",
                      role: "Frontend",
                      level: "Junior",
                      postedAt: "2w ago",
                      contract: "Full Time",
                      location: "Worldwide",
                      languages: [
                        "HTML",
                        "JavaScript"
                      ],
                      tools: [
                        "Sass"
                      ]
                    },
                    {
                      id: 8,
                      company: "Insure",
                      logo: "./assets/insure.svg",
                      new: false,
                      featured: false,
                      position: "Junior Frontend Developer",
                      role: "Frontend",
                      level: "Junior",
                      postedAt: "2w ago",
                      contract: "Full Time",
                      location: "USA Only",
                      languages: [
                        "JavaScript"
                      ],
                      tools: [
                        "Vue",
                        "Sass"
                      ]
                    },
                    {
                      id: 9,
                      company: "Eyecam Co.",
                      logo: "./assets/eyecam-co.svg",
                      new: false,
                      featured: false,
                      position: "Full Stack Engineer",
                      role: "Fullstack",
                      level: "Midweight",
                      postedAt: "3w ago",
                      contract: "Full Time",
                      location: "Worldwide",
                      languages: [
                        "JavaScript",
                        "Python"
                      ],
                      tools: [
                        "Django"
                      ]
                    },
                    {
                      id: 10,
                      company: "The Air Filter Company",
                      logo: "./assets/the-air-filter-company.svg",
                      new: false,
                      featured: false,
                      position: "Front-end Dev",
                      role: "Frontend",
                      level: "Junior",
                      postedAt: "1mo ago",
                      contract: "Part Time",
                      location: "Worldwide",
                      languages: [
                        "JavaScript"
                      ],
                      tools: [
                        "React",
                        "Sass"
                      ]
                    }
                ]
            ) 
        })
    })
}