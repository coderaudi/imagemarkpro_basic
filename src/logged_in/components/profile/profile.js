import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

class ProfilePage extends Component {

    constructor(prosp){
        super();
        this.state={
            firstName : "",
            lastName : "",
            address1 : "",
            address2 : "",
            city : "",
            state : "",
            country : "",
            zip : ""
        }
    }

    updateProfile  = () =>{
        console.log("profile is ", this.state);
    }

    inputChangeHandler = (name , value) =>{
        this.setState({ [name] : value})
    }

    render() {
        return (
            <div>
                <Typography variant="h6" gutterBottom>
                    User Pofile 
      </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={ e => this.inputChangeHandler(e.target.name , e.target.value)}
                            label="First name"
                            fullWidth
                            autoComplete="fname"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={ e => this.inputChangeHandler(e.target.name , e.target.value)}
                          
                            label="Last name"
                            fullWidth
                            autoComplete="lname"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            name="address1"
                            value={this.state.address1}
                            onChange={ e => this.inputChangeHandler(e.target.name , e.target.value)}
                          
                            label="Address line 1"
                            fullWidth
                            autoComplete="billing address-line1"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address2"
                            name="address2"
                            value={this.state.address2}
                            onChange={ e => this.inputChangeHandler(e.target.name , e.target.value)}
                          
                            label="Address line 2"
                            fullWidth
                            autoComplete="billing address-line2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            value={this.state.city}
                            onChange={ e => this.inputChangeHandler(e.target.name , e.target.value)}
                          
                            label="City"
                            fullWidth
                            autoComplete="billing address-level2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="state" name="state" 
                          value={this.state.state}
                          onChange={ e => this.inputChangeHandler(e.target.name , e.target.value)}
                        
                        label="State/Province/Region" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="zip"
                            value={this.state.zip}
                            onChange={ e => this.inputChangeHandler(e.target.name , e.target.value)}
                          
                            name="zip"
                            label="Zip / Postal code"
                            fullWidth
                            autoComplete="billing postal-code"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="country"
                            value={this.state.country}
                            onChange={ e => this.inputChangeHandler(e.target.name , e.target.value)}
                          
                            name="country"
                            label="Country"
                            fullWidth
                            autoComplete="billing country"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Use this address for payment details"
                        />
                    </Grid>


                    <Button
                        variant="contained"
                        color="primary"
                      onClick={() => this.updateProfile()}
                     className={"btn btn-info"}
                    >
                        Save
                  </Button>
                </Grid>
            </div>
        );
    }
}

export default ProfilePage;




