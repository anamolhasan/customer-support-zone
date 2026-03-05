import { useState } from "react";
import ticketsData from "./data/tickets.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketList from "./components/TicketList";
import TaskStatus from "./components/TaskStatus";
import ResolvedList from "./components/ResolvedList";
import Footer from "./components/Footer";

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleAddTask = (ticket) => {
    setInProgress([...inProgress, ticket]);
    setTickets(tickets.filter(t => t.id !== ticket.id));
    toast.info("Ticket moved to In Progress");
  };

  const handleComplete = (ticket) => {
    setResolved([...resolved, ticket]);
    setInProgress(inProgress.filter(t => t.id !== ticket.id));
    toast.success("Ticket Resolved Successfully");
  };

  return (
    <>
      <ToastContainer />

      <Navbar />
      <Banner
        inProgressCount={inProgress.length}
        resolvedCount={resolved.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <div className="md:col-span-2">
          <TicketList tickets={tickets} onAdd={handleAddTask} />
        </div>

        <div>
          <TaskStatus tasks={inProgress} onComplete={handleComplete} />
          <ResolvedList resolved={resolved} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
