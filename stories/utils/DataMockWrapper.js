export default function dataMockWrapper(story, data){
    document.addEventListener('DOMContentLoaded', () => {  
        el.querySelector('os-dial').data = data
     })
    return story()
} 