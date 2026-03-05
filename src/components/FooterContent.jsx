import React from "react";

const FooterContent = () => {
  return (
    <footer className="flex justify-between">
      <div>
        <p className="font-bold text-center">TicketSystem</p>
        <p>
          A Ticket System helps manage and track user requests
        </p>
      </div>
      <nav className="">
        <h6 className="footer-title">Services</h6>
        <p className="link link-hover">Branding</p>
        <p className="link link-hover">Design</p>
        <p className="link link-hover">Marketing</p>
        <p className="link link-hover">Advertisement</p>
      </nav>
      <nav className="">
        <h6 className="footer-title">Company</h6>
        <p className="link link-hover">About us</p>
        <p className="link link-hover">Contact</p>
        <p className="link link-hover">Jobs</p>
        <p className="link link-hover">Press kit</p>
      </nav>
       <nav className="">
        <h6 className="footer-title">Legal</h6>
        <p className="link link-hover">Terms of use</p>
        <p className="link link-hover">Privacy policy</p>
        <p className="link link-hover">Cookie policy</p>
      </nav>
    </footer>
  );
};

export default FooterContent;
