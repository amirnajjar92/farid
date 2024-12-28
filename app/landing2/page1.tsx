'use client';
// Full updated page.tsx with pricing card style based on provided design
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Grid, Card, CardContent, CardActions, Slide } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LanguageIcon from '@mui/icons-material/Language';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});

const slides = [
    { id: 1, content: "Slide 1", color: "rgba(255, 255, 255, 0.1)" },
    { id: 2, content: "Slide 2", color: "rgba(255, 255, 255, 0.1)" },
    { id: 3, content: "Slide 3", color: "rgba(255, 255, 255, 0.1)" },
];

const pricingPlans = [
    {
        title: "Free Plan",
        price: "Free",
        features: [
            "Send up to 2 transfers per month",
            "Basic transaction history",
            "Email support",
            "Limited currency support (USD, EUR, GBP)",
            "Basic security features",
        ],
        buttonText: "Get Started",
        buttonVariant: "contained",
    },
    {
        title: "Standard Plan",
        price: "$9.99/m",
        features: [
            "Unlimited transfers",
            "Transaction history with export options",
            "Priority email support",
            "Expanded currency support",
            "Advanced security features",
        ],
        buttonText: "Get Started",
        buttonVariant: "contained",
    },
    {
        title: "Premium Plan",
        price: "$19.99/m",
        features: [
            "Unlimited transfers with priority processing",
            "Comprehensive transaction analytics",
            "24/7 priority support",
            "Full currency support",
            "Enhanced security features",
        ],
        buttonText: "Get Started",
        buttonVariant: "contained",
    },
];

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [checked, setChecked] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setChecked(false);
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
                setChecked(true);
            }, 500); // Transition duration
        }, 3000); // Auto-slide duration

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={roboto.className} style={{ backgroundColor: '#0f0f0f', color: '#fff', minHeight: '100vh' }}>
            <Head>
                <title>F6 Project</title>
                <meta name="description" content="Welcome to the F6 project" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <AppBar position="static" sx={{ background: "rgba(0, 0, 0, 0.8)", backdropFilter: "blur(10px)", borderRadius: 2 }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>F6 Project</Typography>
                    <Button color="inherit">About Us</Button>
                    <Button color="inherit">Contact</Button>
                    <Button color="inherit">Location</Button>
                    <IconButton color="inherit">
                        <ShoppingCartIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <LanguageIcon />
                        <Typography variant="body2" sx={{ ml: 1 }}>EN / FA</Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Section: Pricing */}
            <section className="w-full py-12" style={{ background: "rgba(15, 15, 15, 0.8)", backdropFilter: "blur(10px)", borderRadius: 3 }}>
                <Typography variant="h4" align="center" gutterBottom style={{ color: '#fff' }}>Pricing</Typography>
                <Grid container spacing={4} justifyContent="center">
                    {pricingPlans.map((plan, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    backgroundColor: "rgba(15, 15, 15, 0.8)",
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    backdropFilter: "blur(10px)",
                                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.6)",
                                }}
                            >
                                <CardContent className="text-center">
                                    <Typography
                                        variant="h6"
                                        style={{ color: "#fff", fontWeight: "bold", marginBottom: 16 }}
                                    >
                                        {plan.title}
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        style={{ color: "#fff", fontWeight: "bold", marginBottom: 24 }}
                                    >
                                        {plan.price}
                                    </Typography>
                                    <Box sx={{ textAlign: "left", color: "#aaa" }}>
                                        {plan.features.map((feature, idx) => (
                                            <Typography
                                                key={idx}
                                                variant="body2"
                                                style={{ marginBottom: 8, display: "flex", alignItems: "center" }}
                                            >
                                                <span
                                                    style={{
                                                        display: "inline-block",
                                                        width: 10,
                                                        height: 10,
                                                        backgroundColor: "#fff",
                                                        borderRadius: "50%",
                                                        marginRight: 8,
                                                    }}
                                                ></span>
                                                {feature}
                                            </Typography>
                                        ))}
                                    </Box>
                                </CardContent>
                                <CardActions sx={{ justifyContent: "center" }}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                                            color: "#fff",
                                            border: "1px solid rgba(255, 255, 255, 0.2)",
                                            textTransform: "none",
                                            width: "80%",
                                            marginBottom: 16,
                                        }}
                                    >
                                        {plan.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </section>

            {/* Footer */}
            <footer className="w-full py-4" style={{ backgroundColor: "rgba(15, 15, 15, 0.8)", color: '#fff', textAlign: 'center', borderRadius: 3 }}>
                &copy; {new Date().getFullYear()} F6 Project. All rights reserved.
            </footer>
        </div>
    );
}
