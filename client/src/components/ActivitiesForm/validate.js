const validate = (form) => {
    let errors = {}
    if(!form.name) {
        errors.name = 'Name is required'
    }
    if(!form.difficult) {
        errors.difficult = "Difficult is required"
    }
    if(!form.duration) {
        errors.duration = "Duration is required"
    }
    if(!form.season) {
        errors.season = 'Season is required'
    }
     if(form.countryID < 3){
       errors.countryID = 'Se requieren al menos tres(3) paises';
     }
    return errors
}

export default validate;