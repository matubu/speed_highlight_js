export default[{match:/@\w+/g,type:"kwd"},{match:/{[\w\s|<>,.@\[\]]+}/g,type:"class"},{match:/\[[\w\s="']+\]/g,type:"var"}];let type="cmnt";export{type};