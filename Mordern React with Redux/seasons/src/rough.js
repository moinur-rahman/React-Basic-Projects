<script type="text/babel" data-presets="env,react">
    
    class UserForm extends React.Component {
        render() {
          return(
            <form>
                <label>Enter a username:</label>
                <input />
            </form>
          )
        }
    }
    


    // Renders the App component into a div with id 'root'
    ReactDOM.render(<UserForm />, document.querySelector('#root'));
</script>
