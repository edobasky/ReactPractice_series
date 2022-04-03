//  ReactDOM.render(<p>Hello my name is edobasky</p>,document.getElementById("root"));

// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

// ReactDOM.render(page,document.getElementById("root2"));

// const navbar = (
//     <nav>
//         <h1 className="header">Butterflyeffect Imagination</h1>
//         <ul>
//             <li>Menu</li>
//             <li>About</li>
//             <li>Pricing</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(navbar,document.getElementById("root2"));

const page = (
    <div>
        <img src="img/react.png"/>
        <h1>
            Fun facts about React
        </h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created in 2013</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps,including mobile apps</li>
        </ul>
    </div>    
)

ReactDOM.render(page,document.getElementById("root2"));
