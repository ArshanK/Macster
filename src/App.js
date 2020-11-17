import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import person1 from './images/person1.jpg'; import person2 from './images/person2.jpg';
import person3 from './images/person3.jpg'; import person4 from './images/person4.jpg';
import person5 from './images/person5.jpg'; import person6 from './images/person6.jpeg';
import person7 from './images/person7.jpg'; import person8 from './images/person8.jpg';
import group1 from './images/group1.jpeg';  import group2 from './images/group2.jpg';
import group3 from './images/group3.jpg';   import group4 from './images/group4.jpg';

class About extends React.Component {
  render() {
    return (
      <div class="homepage">
        <h2 id="homepage">Welcome to Macster!</h2>
        <p id="homepage">Use the yellow tabs to navigate through the application</p>
      </div>
    );
  }
}

class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rowNumber: 8};
    this.setState({rowNumber: 8});
  }

  sendMessage () {
    var table = document.getElementById("messages");
    var row = table.insertRow(this.state.rowNumber);
    var cell0 = row.insertCell(0); var cell1 = row.insertCell(1);
    this.setState({rowNumber: this.state.rowNumber + 1});
    row = table.insertRow(this.state.rowNumber);
    var cell2 = row.insertCell(0); var cell3 = row.insertCell(1);

    cell2.innerHTML = "You:";  cell3.innerHTML = document.getElementById("msg").value;
    cell0.innerHTML = "";      cell1.innerHTML = "Today, 11:28am";

    this.setState({rowNumber: this.state.rowNumber + 2});
    document.getElementById("msg").value = "";
  }

  makeCall() { alert("Our servers are not quite ready yet. Please try again at a later time."); }
  noServer() { alert("There was an error loading this from the server. Please try again at a later time."); }

  render () 
  {      
    return (
      <div class="chatpage">
      <div class="people">
          <div class="person1">
            <img src={person1} alt="person1" width="90px" height="90px"/>
            <info><p id="personName">Maria Saldana</p>
            <p>Thanks for your help! • Yesterday</p></info>
          </div> <hr/>
          <div class="person" onClick={this.noServer}>
            <img src={person2} alt="person1" width="90px" height="90px"/>
            <info><p id="personName">Andre Silva</p>
            <p>Correct • Yesterday</p></info>
          </div> <hr/>
          <div class="person" onClick={this.noServer}>
            <img src={person3} alt="person1" width="90px" height="90px"/>
            <info><p id="personName">Kristy Smith</p>
            <p>Have a nice day! • Yesterday</p></info>
          </div> <hr/>
          <div class="person" onClick={this.noServer}>
            <img src={person4} alt="person1" width="90px" height="90px"/>
            <info><p id="personName">Thomas Brown</p>
            <p>That'll be the materials course • Tue</p></info>
          </div> <hr/>
          <div class="person" onClick={this.noServer}>
            <img src={person5} alt="person1" width="90px" height="90px"/>
            <info><p id="personName">Katie Keyes</p>
            <p>The power is out • Sun</p></info>
          </div> <hr/>
          <div class="person" onClick={this.noServer}>
            <img src={person6} alt="person1" width="90px" height="90px"/>
            <info><p id="personName">Dean Hemmings</p>
            <p>We'll talk on Friday then • Sun</p></info>
          </div> <hr/>
          <div class="person" onClick={this.noServer}>
            <img src={person7} alt="person1" width="90px" height="90px"/>
            <info><p id="personName">Jeff Dezos</p>
            <p>What's that river called? • Sun</p></info>
          </div> <hr/>
          <div class="person" onClick={this.noServer}>
            <img src={person8} alt="person1" width="90px" height="90px"/>
            <info><p id="personName">Linus Sebastian</p>
            <p>I dropped it • Sat</p></info>
          </div> <hr/>
       <p>It's never too late to send a message!</p> 
      </div>

      <div class="message">
        <h3>Maria Saldana <small>OFFLINE</small></h3>
        <table id="messages">
            <tr id="usr"><td>You:</td> <td>I've submitted the assignment to the dropbox</td></tr>
            <tr id="usr2"><td></td> <td>Yesterday, 2:37pm</td></tr>
            <tr id="usr"><td>You:</td> <td>That should be it for this week</td></tr>
            <tr id="usr2"><td></td> <td>Yesterday, 2:38pm</td></tr>
            <tr id="not"><td>Maria:</td> <td>That was quite efficient</td></tr>
            <tr id="not2"><td></td> <td>Yesterday, 2:41pm</td></tr>
            <tr id="not"><td>Maria:</td> <td>Thanks for your help :)</td></tr>
            <tr id="not2"><td></td> <td>Yesterday, 2:41pm</td></tr>
        </table>

        <div class="msgbox">
          <button onClick={this.makeCall}><span>CALL</span></button>
          <input type="text" class="form-control" id="msg" placeholder="Enter a message..."/>
          <button onClick={this.sendMessage.bind(this)}><span>SEND</span></button>
        </div>
      </div>
      </div>
    );
  }    
};

class Groups extends React.Component 
{  
  buttonNotWorking() { alert("Our servers are not quite ready yet. Please try again at a later time."); }
  noServer() { alert("There was an error loading this from the server. Please try again at a later time."); }
  state = { showing: false, showdetails: false};
  
  render () {      
    const { showing } = this.state;
    const { showdetails } = this.state;

    return (
      <div>
        <div class="createButton">
          <div class="createGroup" id="createGroup">
            <input type="text" id="newGroupName" placeholder="New Group Name..."/>
          </div>

          <button onClick={() => this.setState({ showing: !showing })}>
            <span>+ CREATE GROUP</span>
          </button>
        </div>

        <div class="Groups">
        <div class="groupList">
        <div class="row1">
          <div class="group1" onClick={this.noServer}>
            <div class="groupTitle">
            <img src={group1} alt="person1" width="50px" height="50px"/>
            <p class="groupName">SFWRENG 3AX3</p>
            </div>
            <p class="groupMsg">Ahmed: Sounds good</p>
            <p class="groupMsgTime">7:23pm</p>
            <p class="groupMembers">Ahmed G., Sam R., Norman R., + 2 others</p>
          </div>
          <div class="group2" onClick={this.noServer}>
            <div class="groupTitle">
            <img src={group2} alt="person1" width="50px" height="50px"/>
            <p class="groupName">Capstone</p>
            </div>
            <p class="groupMsg">Angela: Ok, meet on Thursday then</p>
            <p class="groupMsgTime">3:14pm</p>
            <p class="groupMembers">Angela E., Toby F., Gengyun W., + 2 others</p>
          </div>
        </div>

        <div class="row2">
          <div class="group3" onClick={this.noServer}>
            <div class="groupTitle">
            <img src={group3} alt="person1" width="50px" height="50px"/>
            <p class="groupName">SFWRENG 4A03</p>
            </div>
            <p class="groupMsg">Liam: Look it over when you can</p>
            <p class="groupMsgTime">11:35am</p>
            <p class="groupMembers">Liam N., Frank T., Humza R., You</p>
          </div>
          { showing 
            ? <div class="group4" id="group4" onClick={() => this.setState({ showdetails: !showdetails })}> 
            {/* 96c2f3 */}
              <div class="groupTitle">
              <img src={group4} alt="person1" width="50px" height="50px"/>
              <p class="groupName" id="groupName">SFWRENG 4HC3</p>
              </div>
              <p class="groupMsg">No recent messages</p>
              <p class="groupMsgTime">-</p>
              <p class="groupMembers" id="groupMembers">You</p>
            </div>
            : null
          }
          </div>
        </div>

          {showdetails
            ? <div class="groupDetails" id="groupDetails">
                <h2><strong>SFWRENG 4HC3 Details</strong></h2> <h2>Group Members:</h2>
                <table> <tr>No Members</tr> </table>
                <button onClick={this.buttonNotWorking}>Add Members</button>
                <hr/>
                <h2>Messages:</h2>
                <table> <tr>No Recent Messages</tr> </table>
                <button onClick={this.buttonNotWorking}>Send Message</button>
              </div>
              : null}
        </div>
      </div>
    );
  }    
};

class Search extends React.Component  {  
  noServer() { alert("There was an error in loading this user's information. Please try again at a later time."); }

  myFunction() { 
    var input, filter, li, p, i, txtValue;
    input = document.getElementById("searchPPL");
    filter = input.value.toUpperCase();
    li = document.getElementById("filteredUsers").getElementsByTagName('li');
   
    for (i = 0; i < li.length; i++) {
      p = li[i].getElementsByTagName("p")[0];
      txtValue = p.textContent || p.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  
  render () 
  {     
    return (  
      <div>
        <div class="searchBox">
          <h4><strong>Looking for someone?</strong></h4>
          <input type="text" id="searchPPL" onKeyUp={this.myFunction} placeholder="Enter name..."/>
          <br/>
        </div>
        <div class="userList">
          <ul id="filteredUsers" onClick={this.noServer}>
            <li><p>Alexa Smith • <small>Student</small> </p></li>        <li><p>Amelia Edwards • <small>Student</small> </p></li>
            <li><p>Andre Silva • <small>Faculty</small> </p></li>        <li><p>Arshan Khan • <small>Student</small> </p></li>
            <li><p>Dean Hemmings • <small>Student</small> </p></li>      <li><p>Dennis Chung • <small>Faculty</small> </p></li>
            <li><p>Ellie Howser • <small>Student</small> </p></li>       <li><p>Filip Marko • <small>Student</small> </p></li>
            <li><p>Harris Ahmed • <small>Student</small> </p></li>       <li><p>Hassan Zaidi • <small>Faculty</small> </p></li>
            <li><p>Ida Payung • <small>Student</small> </p></li>         <li><p>James Duncan • <small>Student</small> </p></li>
            <li><p>Jeff Dezos • <small>Faculty</small> </p></li>         <li><p>Jenny Xi • <small>Faculty</small> </p></li>
            <li><p>Jia Zhong • <small>Faculty</small> </p></li>          <li><p>Jung Chen • <small>Student</small> </p></li>
            <li><p>Katie Keyes • <small>Student</small> </p></li>        <li><p>Kayla Corkum • <small>Faculty</small> </p></li>
            <li><p>Kristy Smith • <small>Student</small> </p></li>       <li><p>Linus Sebastian • <small>Student</small> </p></li>
            <li><p>Mahmood Elaghoury • <small>Student</small> </p></li>  <li><p>Maria Saldana • <small>Student</small> </p></li>
            <li><p>Osama Iqbal • <small>Student</small> </p></li>        <li><p>Pablo Madruga • <small>Student</small> </p></li>
            <li><p>Paul Miranda • <small>Faculty</small> </p></li>       <li><p>Porter Winger • <small>Student</small> </p></li>
            <li><p>Rebecca Laurenco • <small>Student</small> </p></li>   <li><p>Taymaa Hussain • <small>Student</small> </p></li>
            <li><p>Thomas Brown • <small>Faculty</small> </p></li>       <li><p>Thomas Jettison • <small>Student</small> </p></li>
          </ul>
        </div>

      </div>
    );
  }    
};




class App extends React.Component 
{
  render ()
  {
    return (

      <Router>
        <div>
          <h1>M A C S T E R</h1>
          <div class="Button-ribbon">
            <button><NavLink to="/chats">CHATS</NavLink></button>
            <button><NavLink to="/groups">GROUPS</NavLink></button>
            <button><NavLink to="/search">SEARCH</NavLink></button>
          </div>
  
          <div class="mainscreen">
            <Route exact path="/" component={About}/>
            <Route path="/chats" component={Chats}/>
            <Route path="/groups" component={Groups}/>
            <Route path="/search" component={Search}/>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
