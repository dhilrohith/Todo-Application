// DOM 

var taskContent = document.querySelector(".task_content");
var taskModal = document.querySelector(".task_modal_body");

const htmlTaskContent = ({ id, title, description, type, url }) =>{
    `<div class="col-md-6 col-lg-4 mt-3" id=${id} key=${id}>
<div class="card shadow-sm task_card">
<div class="card-header d-flex justify-content-end task_card_header">
<button type="button" class="btn btn-outline-info me-2" name=${id}>
<i class="fas fa-pencil-alt" name=${id}></i>
</button>
<button type="button" class="btn btn-outline-danger" name=${id}>
<i class="fas fa-trash-alt" name=${id}></i>
</button>
</div>

<div class="card-body" style="width: 18rem;">
  ${url && `<img src=${url} class="card-img-top md-3 rounded-lg" alt="image is loading">
    `}
    <h5 class="card-title">${title}</h5>
    <p class="description trim-3-line text-dark card_text">${description}</p>
    <div class="tags text-white d-flex flex-wrap">
    <span class="badge bg-primary m-1">${type}</span>
    </div>
</div>

<div class="card-footer">
    <button type="button" class="btn btn-outline-primary float-right  data-bs-toggle="modal" data-bs-target="#displayTask">
    Open Task
    </button>
 </div>
</div>
</div>`
  }
const htmlModalContent = ({id,title,description,type,url})=>{
    const date = new date(parseInt(id));
    return`
    <div id=${id}>
        ${
            url && `<img src=${url} alt="card image cap" class="image-fluid mb-3" />`
        }
        <strong class="text-sm text-muted">created on ${date.toDateString()}</strong>
        <h2 class="my-3">${title}</h2>
        <p class="lead">${description}</p>
    </div>
    `
}

