import React from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { addActivity, getAllActivities, getAllCountries } from '../../redux/actions';
import style from '../form/form.module.css';
import { Link } from 'react-router-dom';

const Form = () => {
  const countries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);

  const [form, setForm] = useState({
    name: '',
    dificult: '',
    duration: '',
    station: '',
    ubication: '',
  });

  const station = ['Winter', 'Spring', 'Autumn', 'Summer'];
  const dificult = [1, 2, 3, 4, 5];
  const duration = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
  ];

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({
      ...form,
      [property]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addActivity(form));
    alert('Actividad creada');
  };
  const handleSelectDificult = (e) => {
    setForm({
      ...form,
      dificult: e.target.value,
    });
  };

  const handleSelectDuration = (e) => {
    setForm({
      ...form,
      duration: e.target.value,
    });
  };

  const handleSelectUbication = (e) => {
    setForm({
      ...form,
      ubication: form.ubication.concat(e.target.value),
    });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getAllActivities());
  }, []);

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
            <select onChange={handleSelectDificult}>
              <option value={form.dificult}>Select</option>
              {dificult.map((e) => (
                <option value={e} name="dificult">
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
            Station:
            <input
              type="text"
              name="station"
              value={form.station}
              onChange={handleChange}
              placeholder="Autumn, Winter, Spring, Summer "
            />
          </label>

          <label>
            Ubication:
            <select
              className="select"
              name="ubication"
              onChange={handleSelectUbication}
              value={form.id}
            >
              <option>Countries</option>
              {countries?.map((e) => (
                <option key={e.name} value={e.name}>
                  {e.name}
                </option>
              ))}
            </select>
          </label>
          <div className={style.btn}>
            <button type="submit">Add Activity</button>
          </div>
        </div>
      </form>
    </div>
  );
};

const dispatchAct = (dispatch) => {
  return {
    addActivity: (activity) => dispatch(addActivity(activity)),
  };
};

//const filterCountries = countries.filter((e) => e.name === [activities].ubication)
//? filterCountries.activities.push([activities])
// : new Error ('el pais no existe')

export default connect(null, dispatchAct)(Form);
