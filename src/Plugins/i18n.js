export default{
    install:(app, options) =>{
        app.config.globalProperties.$translate = key => {
        return key.split('.').reduce((o,i)=>{
            if (o) return o[i]
        },options) 
    };
    app.config.globalProperties.$maFonction = () => "salut";
    app.config.globalProperties.$double = (nb) => (nb*2);
}
}