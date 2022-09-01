

import React, { useEffect, useState } from 'react';
import {
    TextInput,
    StyleSheet,
    Text,
    View,
    Button  } from 'react-native';
    function CovidData() {
  const [country, setCountry] = useState("");
  const [cases, setCases] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
  const [todayCases, setTodayCases] = useState("");
  const [deathCases, setDeathCases] = useState("");
  const [recoveredCases, setRecoveredCases] = useState("");
  const [userInput, setUserInput] = useState("");
  
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  
  const setData = ({
    country,
    cases,
    deaths,
    recovered,
    todayCases,
    todayDeaths,
    todayRecovered,
  }) => {
    setCountry(country);
    setCases(cases);
    setRecovered(recovered);
    setDeaths(deaths);
    setTodayCases(todayCases);
    setDeathCases(todayDeaths);
    setRecoveredCases(todayRecovered);
  };
  
  const handleSearch = (e) => {
    setUserInput(e.target.value);
    console.log(setUserInput)
  };
  const handleSubmit = (props) => {
    props.preventDefault();
    console.log(userInput)
    fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };
  
  return (
    <View className="covidData">
      <Text>COVID-19 CASES COUNTRY WISE</Text>
      <View className="covidData__input">
      
          {/* input county name */}
          <TextInput  onChangeText={userInput => setUserInput(userInput)} placeholder="Enter Country Name" />
          <Button
            onPress={handleSubmit}
            title="Submit"
            color="#841584"
            />
         
       
      </View>
  
      {/* Showing the details of the country */}
      <View className="covidData__country__info">
        <Text>Country Name : {country} </Text>
  
        <Text>Cases : {cases}</Text>
  
        <Text>Deaths : {deaths}</Text>
  
        <Text>Recovered : {recovered}</Text>
  
        <Text>Cases Today : {todayCases}</Text>
  
        <Text>Deaths Today : {deathCases}</Text>
  
        <Text>Recovered Today : {recoveredCases}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 30,
    },
    covidData : {
        backgroundColor: "gray",
        width:" 30%",
        margin: 10,
        marginTop: 15,
        bordeRadius: 6,
        padding: 10,
      }
     
      
  })
  
export default CovidData;