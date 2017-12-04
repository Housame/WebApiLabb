using CustomerRegisterDatabase.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace CustomerRegisterDatabase.Controllers
{
    [Route("api/customer")]
    public class CustomerController : Controller
    {
        private DatabaseContext databaseContext;

        public CustomerController(DatabaseContext databaseContext)
        {
            this.databaseContext = databaseContext;
        }

        [HttpPost]
        public IActionResult PostCustomer(Customer customer)
        {

            databaseContext.Add(customer);
            databaseContext.SaveChanges();
            return Ok();
        }

        [HttpGet]
        public IActionResult GetCustomers()
        {
            var customerList = databaseContext.Customers;
            return Ok(customerList);
        }
        [Route("remove")]
        [HttpPost]
        public IActionResult RemoveCustomer(int id)
        {
            Customer customer = databaseContext.Customers.Find(id);
            databaseContext.Remove(customer);
            databaseContext.SaveChanges();
            return Ok();
        }
        [Route("uppgrade")]
        [HttpPost]
        public IActionResult UppgradeCustomer(int id, string firstName)
        {
            Customer customer = databaseContext.Customers.Find(id);
            customer.FirstName = firstName;
            databaseContext.SaveChanges();
            return Ok();
        }


    }
}
