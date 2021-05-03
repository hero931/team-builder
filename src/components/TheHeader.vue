<template>
    <header>
        <nav>
            <h2 id="a1"><router-link to="/">Team builder</router-link></h2>        
            <ul>                
                <li>
                    <router-link to="/profs">Professionals</router-link>
                </li>
                <li>
                    <router-link to="/requests">Requests</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>    
    header {
        width: 100%;
        display: grid;
        grid-template-columns: 7fr 1.5fr;
        background: rgb(223, 235, 240);        
    }

    header h2 {
        margin-left: 2rem;
    }    

    header a {
        text-decoration: none;          
    }

    header nav {        
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header ul {
        list-style: none;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    li {
        margin: 0 0.7rem;       
    }

    a:active,
    a:hover,
    a.router-link-active {
        text-decoration: underline;
        text-decoration-color: darkorange;        
    }
</style>