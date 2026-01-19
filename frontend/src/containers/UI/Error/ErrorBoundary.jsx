import { Box, Button } from "@mui/material";
import PageLevelError from "./PageLevelError";
import React from "react";

export class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(){
        return {hasError: true}
    }

    componentDidCatch(error, info){
        console.log('Ui is carshing...', error, info)
    }

    render(){
        if(this.state.hasError){
            return this.props.fallback
        }
        return this.props.children
    }
}

// dev => testing => uat => final =>  prod