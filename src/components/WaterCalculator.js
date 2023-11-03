import React, { useState } from 'react';
import './WaterCalculator.css';

function WaterFootprintCalculator() {
  const [country, setCountry] = useState('');
  const [cereal, setCereal] = useState('');
  const [meat, setMeat] = useState('');
  const [diary, setDiary] = useState('');
  const [egg, setEgg] = useState('');
  const [fat, setFat] = useState('');
  const [sugar, setSugar] = useState('');
  const [vegetable, setVegetable] = useState('');
  const [fruit, setFruit] = useState('');
  const [root, setRoot] = useState('');
  const [coffee, setCoffee] = useState('');
  const [tea, setTea] = useState('');
  const [showernumber, setShowernumber] = useState('');
  const [showerminute, setShowerminute] = useState('');
  const [showertype, setShowertype] = useState('standard');
  const [bathnumber, setBathnumber] = useState('');
  const [tap1, setTap1] = useState('');
  const [tap2, setTap2] = useState('20');
  const [laundryload, setLaundryload] = useState('');
  const [toilettype, setToilettype] = useState('yes');
  const [dishnumber, setDishnumber] = useState('');
  const [dishminute, setDishminute] = useState('');
  const [dishweek, setDishweek] = useState('');
  const [carweek, setCarweek] = useState('');
  const [gardenweek, setGardenweek] = useState('');
  const [gardenminute, setGardenminute] = useState('');
  const [rinsingminute, setRinsingminute] = useState('');
  const [poolcapacity, setPoolcapacity] = useState('');
  const [poolnumber, setPoolnumber] = useState('');
  const [income, setIncome] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform calculations or actions based on the user's inputs
    // You can access the state variables for each input field
  };

  return (
    <div>
      <p className="introduction">
        Your individual water footprint is equal to the water required to produce the goods and services consumed by you...
      </p>

      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td width="50%">Country of residence</td>
              <td width="50%">
                <select name="Country_ID" value={country} onChange={(e) => setCountry(e.target.value)}>
                  <option value="0">Select a Country</option>
                  <option value="1">Albania</option>
                  <option value="2">Algeria</option>
                  {/* Render other country options here */}
                </select>
              </td>
            </tr>
            <tr>
              <td><strong>Food consumption</strong></td>
            </tr>
            <tr>
              <td>Cereal products (wheat, rice, maize, etc.)</td>
              <td>
                <input name="cereal" size="3" type="text" value={cereal} onChange={(e) => setCereal(e.target.value)} />
                <span> kg per week</span>
              </td>
            </tr>
            <tr>
              <td>Meat products</td>
              <td>
                <input name="meat" size="3" type="text" value={meat} onChange={(e) => setMeat(e.target.value)} />
                <span> kg per week</span>
              </td>
            </tr>
            <tr>
              <td>Dairy products</td>
              <td>
                <input name="diary" size="3" type="text" value={diary} onChange={(e) => setDiary(e.target.value)} />
                <span> kg per week</span>
              </td>
            </tr>
            <tr>
              <td>Eggs</td>
              <td>
                <input name="egg" size="3" type="text" value={egg} onChange={(e) => setEgg(e.target.value)} />
                <span> number per week</span>
              </td>
            </tr>
            <tr>
              <td>How do you prefer to take your food?</td>
              <td>
                <select name="fat" value={fat} onChange={(e) => setFat(e.target.value)}>
                  <option value="">Fat content</option>
                  <option value="1">With average fat</option>
                  <option value="0.7">Low fat</option>
                  <option value="1.3">High fat</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>How is your sugar and sweets consumption?</td>
              <td>
                <select name="sugar" value={sugar} onChange={(e) => setSugar(e.target.value)}>
                  <option value="">Sugar consumption</option>
                  <option value="1">Average</option>
                  <option value="0.7">Low</option>
                  <option value="1.3">High</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Vegetables</td>
              <td>
                <input name="vegetable" size="3" type="text" value={vegetable} onChange={(e) => setVegetable(e.target.value)} />
                <span> kg per week</span>
              </td>
            </tr>
            <tr>
              <td>Fruits</td>
              <td>
                <input name="fruit" size="3" type="text" value={fruit} onChange={(e) => setFruit(e.target.value)} />
                <span> kg per week</span>
              </td>
            </tr>
            <tr>
              <td>Starchy roots (potatoes, cassava)</td>
              <td>
                <input name="root" size="3" type="text" value={root} onChange={(e) => setRoot(e.target.value)} />
                <span> kg per week</span>
              </td>
            </tr>
            <tr>
              <td>How many cups of coffee do you take per day?</td>
              <td>
                <input name="coffee" size="3" type="text" value={coffee} onChange={(e) => setCoffee(e.target.value)} />
                <span> cup per day</span>
              </td>
            </tr>
            <tr>
              <td>How many cups of tea do you take per day?</td>
              <td>
                <input name="tea" size="3" type="text" value={tea} onChange={(e) => setTea(e.target.value)} />
                <span> cup per day</span>
              </td>
            </tr>
            <tr>
              <td><strong>Domestic water use - indoors</strong></td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>How many showers do you take each day?</td>
              <td>
                <input name="showernumber" size="3" type="text" value={showernumber} onChange={(e) => setShowernumber(e.target.value)} />
                <span> number per day</span>
              </td>
            </tr>
            <tr>
              <td>What is the average length of each shower?</td>
              <td>
                <input name="showerminute" size="3" type="text" value={showerminute} onChange={(e) => setShowerminute(e.target.value)} />
                minute per shower
              </td>
            </tr>
            <tr>
              <td>Do your showers have standard or low-flow showerheads?</td>
              <td>
                <input name="showertype" value="standard" type="radio" checked={showertype === 'standard'} onChange={() => setShowertype('standard')} />
                Standard shower head
                <input name="showertype" value="lowflow" type="radio" checked={showertype === 'lowflow'} onChange={() => setShowertype('lowflow')} />
                Low flow shower head
              </td>
            </tr>
           
            <tr>
              <td>How many baths do you have each week?</td>
              <td>
                <input name="bathnumber" size="3" type="text" value={bathnumber} onChange={(e) => setBathnumber(e.target.value)} />
                <span> number per week</span>
              </td>
            </tr>
            <tr>
              <td>How many times per day do you brush your teeth, shave or wash your hand?</td>
              <td>
                <input name="tap1" size="3" type="text" value={tap1} onChange={(e) => setTap1(e.target.value)} />
                <span> number per day</span>
              </td>
            </tr>
            <tr>
              <td>Do you leave the tap running when brushing your teeth and shaving?</td>
              <td>
                <input name="tap2" value="20" type="radio" checked={tap2 === '20'} onChange={() => setTap2('20')} />
                Yes
                <input name="tap2" value="1" type="radio" checked={tap2 === '1'} onChange={() => setTap2('1')} />
                No
              </td>
            </tr>
            <tr>
              <td>How many loads of laundry do you do in an average week?</td>
              <td>
                <input name="laundryload" size="3" type="text" value={laundryload} onChange={(e) => setLaundryload(e.target.value)} />
                <span> times per week</span>
              </td>
            </tr>
            <tr>
              <td>Do you have a dual flush toilet?</td>
              <td>
                <input name="toilettype" value="yes" type="radio" checked={toilettype === 'yes'} onChange={() => setToilettype('yes')} />
                Yes
                <input name="toilettype" value="no" type="radio" checked={toilettype === 'no'} onChange={() => setToilettype('no')} />
                No
                <input name="toilettype" value="Eco" type="radio" checked={toilettype === 'Eco'} onChange={() => setToilettype('Eco')} />
                No flushing. Use eco-toilet.
              </td>
            </tr>
            <tr>
              <td>If you wash your dishes by hand how many times are dishes washed each day?</td>
              <td>
                <input name="dishnumber" size="3" type="text" value={dishnumber} onChange={(e) => setDishnumber(e.target.value)} />
                <span> number per day</span> 
              </td>
            </tr>
            <tr>
              <td>How long does the water run during each wash?</td>
              <td>
                <input name="dishminute" size="3" type="text" value={dishminute} onChange={(e) => setDishminute(e.target.value)} />
                minute per wash
              </td>
            </tr>
            <tr>
              <td>If you have a dish washer, how many times is it used each week?</td>
              <td>
                <input name="dishweek" size="3" type="text" value={dishweek} onChange={(e) => setDishweek(e.target.value)} />
                <span> number per week</span> 
              </td>
            </tr>
            {/* Continue rendering other input fields */}
            <tr>
              <td><strong>Domestic water use - outdoors</strong></td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>How many times per week do you wash a car?</td>
              <td>
                <input name="carweek" size="3" type="text" value={carweek} onChange={(e) => setCarweek(e.target.value)} />
                <span> number per week</span> 
              </td>
            </tr>
            <tr>
              <td>How many times do you water your garden each week?</td>
              <td>
                <input name="gardenweek" size="3" type="text" value={gardenweek} onChange={(e) => setGardenweek(e.target.value)} />
                <span> number per week</span> 
              </td>
            </tr>
            <tr>
              <td>How long do you water your garden each time?</td>
              <td>
                <input name="gardenminute" size="3" type="text" value={gardenminute} onChange={(e) => setGardenminute(e.target.value)} />
                minute per watering
              </td>
            </tr>
            <tr>
              <td>How long per week do you spend rinsing equipment, driveways, or sidewalks each week?</td>
              <td>
                <input name="rinsingminute" size="3" type="text" value={rinsingminute} onChange={(e) => setRinsingminute(e.target.value)} />
                minute per week
              </td>
            </tr>
            <tr>
              <td>If you have a swimming pool what is its capacity?</td>
              <td>
                <input name="poolcapacity" size="3" type="text" value={poolcapacity} onChange={(e) => setPoolcapacity(e.target.value)} />
                cubic meter
              </td>
            </tr>
            <tr>
              <td>How many times per year do you empty your swimming pool?</td>
              <td>
                <input name="poolnumber" size="3" type="text" value={poolnumber} onChange={(e) => setPoolnumber(e.target.value)} />
                number per year
              </td>
            </tr>
            <tr>
              <td><strong>Industrial goods consumption</strong></td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>What is your gross yearly income? (Only that part of income which is consumed by you).</td>
              <td>
                <input name="income" size="10" type="text" value={income} onChange={(e) => setIncome(e.target.value)} />
                US$ per year
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{ marginTop: '12px' }}>
          <input value="Calculate my water footprint" type="submit" />
        </div>
      </form>
    </div>
  );
}

export default WaterFootprintCalculator;


