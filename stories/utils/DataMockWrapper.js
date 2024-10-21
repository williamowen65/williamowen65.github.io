export default function dataMockWrapper(story, data){
    const el = document.createElement('div');
    el.innerHTML = `${story()}`
    document.addEventListener('DOMContentLoaded', () => {  
        el.querySelector('os-dial').data = data
     })
    return el
} 