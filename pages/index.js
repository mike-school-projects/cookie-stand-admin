import { useAuth } from "../contexts/auth";
import useResource from "@/hooks/useResource"
import LoginForm from '../components/LoginForm';
import Head from 'next/head';
import Header from '../components/Header';
import CookieStandAdmin from '../components/CookieStandAdmin';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';


export default function Home() {
  const [cookieStands, setCookieStands] = useState([]);
  const [grandTotal, setGrandTotal] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);


  // Pulls in global context from useAuth function in auth.js file
  const { user, login } = useAuth();
  const { resources, createResource } = useResource();


  function loginFormHandler(event) {
    event.preventDefault();

    let userName = event.target.elements.userName.value;
    let password = event.target.elements.password.value;

    login(userName, password)

    event.target.reset();
  }


  function createTable(event) {
    event.preventDefault();


    let location = event.target.elements.location.value;
    let minCust = event.target.elements.minCust.value;
    let maxCust = event.target.elements.maxCust.value;
    let avgCookies = event.target.elements.avgCookies.value;

    // Create new store
    let newStoreSalesArray = calcSales(parseFloat(minCust), parseFloat(maxCust), parseFloat(avgCookies));

    let newCookieStand = {
      location: location,
      owner: user.id,
      minimum_customers_per_hour: minCust,
      maximum_customers_per_hour: maxCust,
      average_cookies_per_sale: avgCookies,
      hourly_sales: newStoreSalesArray,
    }

    createResource(newCookieStand)

    event.target.reset();
  }


  function calcSales(minCust, maxCust, avgCookies) {
    let array = [];

    for (let i = 0; i < 14; i++) {
      array[i] = Math.round(Math.round(Math.floor(Math.random() * (maxCust - minCust + 1) + minCust)) * avgCookies)
    }

    // Calculate total
    let total = 0;

    array.forEach(item => {
      total += item;
    })

    array.push(total)

    return array
  }


  // Creates cookieStands array if resources changes
  useEffect(() => {
    // Check to see if resources is valid
    if (resources == null) {
      return
    }

    // Create array of cookieStands
    let array = [];

    for (let i = 0; i < resources.length; i++) {
      let location = resources[i].location;
      let minCust = resources[i].minimum_customers_per_hour;
      let maxCust = resources[i].maximum_customers_per_hour;
      let avgCookies = resources[i].average_cookies_per_sale;
      let id = resources[i].id;

      // Create new store
      let newStoreSalesArray = calcSales(parseFloat(minCust), parseFloat(maxCust), parseFloat(avgCookies));

      let newCookieStand = {
        location: location,
        minCust: minCust,
        maxCust: maxCust,
        avgCookies: avgCookies,
        salesArray: newStoreSalesArray,
        id: id,
      }
      array.push(newCookieStand)

    }

    // Set cookieStands state object
    setCookieStands(array)

  }, [resources])


  // Calculate total of all stores if cookieStands changes
  useEffect((event) => {
    let array = [];
    let subtotal = 0;

    for (let i = 0; i < 15; i++) {
      subtotal = 0;

      cookieStands.forEach((stand) => {
        subtotal += stand.salesArray[i]
      })

      array.push(subtotal);
    }

    // Save new store to state
    setGrandTotal(array);

  }, [cookieStands])


  return (
      <div className="">
        <Head>
          <title>Cookie Stand Admin</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        {user
          ? <CookieStandAdmin
            createTable={createTable}
            cookieStands={cookieStands}
            grandTotal={grandTotal}

          />
          : <LoginForm
            loginFormHandler={loginFormHandler}
          />

        }

        <Footer
          cookieStands={cookieStands}
        />

      </div>

  );
}
