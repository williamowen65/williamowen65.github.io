export default function dataMockWrapper(story, data){
    const el = document.createElement('div');
    el.setAttribute('data-mock-wrapper', true);
    el.innerHTML = `${story()}`
    document.addEventListener('DOMContentLoaded', () => {  
        el.querySelector('*').data = data
     })
     console.log("el", el)
    return el
} 