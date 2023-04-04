import React from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { addActivity, getAllCountries, getAllActivities } from '../../redux/actions';
import style from '../ActivitiesForm/activitiesForm.module.css';
import { Link } from 'react-router-dom';
import validate from './validate';


const Form = () => {
    //const allDogs = useSelector((state) => state.allDogs);
    const allActivities = useSelector((state) => state.allActivities);
    const allCountries = useSelector((state) => state.allCountries)
    const dispatch = useDispatch('');
    const [form, setForm] = useState({
        name:'',
        difficult: '',
        duration: '',
        season: '',
        countryName: [],
    });

    const [errors, setErrors] = useState({
        name:'',
        difficult: '',
        duration: '',
        season: '',
        countryName: [],
    })
  
    const season = ['Winter', 'Spring', 'Autumn', 'Summer'];
    const difficult = [1, 2, 3, 4, 5];
    const duration = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    ];

    const handleChange = (event) => {
       setForm ({
        ...form,
        [event.target.name]: event.target.value,
      });
      setErrors(validate({
        ...form,
         [event.target.name]: event.target.value
     }))
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
     dispatch(addActivity(form));
     
     if (form.name.length > 0 && form.difficult.length > 0 && form.duration.length > 0 && form.season.length > 0 && form.countryName.length > 0) {
     setForm({
        name:'',
        difficult: '',
        duration: '',
        season: '',
        countryName: [],
     })
     alert('Actividad creada')
    }
     
     
     else {
        alert(errors.name || errors.difficult || errors.duration || errors.season || errors.countryName)
     }
    };
  
    const handleSelectCountry = (e) => {
      setForm({
        ...form,
        countryName : [...form.countryName,e.target.value],
      });
    };

    
    const handleSelectDifficult = (e) => {
        setForm({
          ...form,
          difficult: e.target.value,
        });
      };
    
      const handleSelectDuration = (e) => {
        setForm({
          ...form,
          duration: e.target.value,
        });
      };

      const handleSelectSeason = (e) => {
        setForm({
          ...form,
          season: e.target.value,
        });
      };
    
    useEffect(() => {
      dispatch(getAllCountries());
      dispatch(getAllActivities());
    }, [dispatch]);
  
    return (
        <div className={style.div}>
          <form className={style.form} onSubmit={handleSubmit}>
            <Link to="/countries" className={style.btn_home}>
              <button>Home</button>
            </Link>
            <div className={style.container}>
              <h2>Add Activities Form</h2>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                ></input>
              </label>
    
              <label>
                Difficult:
                <select onChange={handleSelectDifficult}>
                  <option value={form.difficult}>Select</option>
                  {difficult.map((e) => (
                    <option value={e} name="difficult">
                      {e}
                    </option>
                  ))}
                </select>
              </label>
    
              <label>
                Duration:
                <select onChange={handleSelectDuration}>
                  <option value={form.duration}>Select</option>
                  {duration.map((e) => (
                    <option value={e} name="duration">
                      {e}
                    </option>
                  ))}
                </select>
              </label>
    
              <label>
                Season:
                <select onChange={handleSelectSeason}>
                  <option value={form.season}>Select</option>
                  {season.map((e) => (
                    <option value={e} name="season">
                      {e}
                    </option>
                  ))}
                </select>
              </label>
    
              <label>
                Ubication:
                <select
                  className="select"
                  name="country"
                  onChange={handleSelectCountry}
                  value={form.id}
                  key={form.id}
                >
                  {allCountries?.map((e) => (
                    <option key={e.name} value={e.name}>
                      {e.name}
                    </option>
                  ))}
                </select>

                <div className={style.btn_select}>
           { Array.isArray(form.countryName) ? form.countryName.map((e)=> <button  type='button' key={e.name} value={e.name}>{e}</button>) : null}
            </div>

              </label>
              <div className={style.btn}>
                <button type="submit">Add Activity</button>
              </div>
            </div>
          </form>
        </div>
      );
    };
    
     
  
  const dispatchActivity = (dispatch) => {
    return {
      addActivity: (activity) => {dispatch(addActivity(activity))},
    };
  };
  
  
  export default connect(null, dispatchActivity)(Form);