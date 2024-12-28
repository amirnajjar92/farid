'use client';
// Full updated page.tsx with all 5 sections and Roboto font integration using next/font
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Grid, Card, CardContent, CardActions, Slide, Avatar, Rating } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LanguageIcon from '@mui/icons-material/Language';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Roboto } from 'next/font/google';
import logo from '@/public/logo.png';
import Image from 'next/image';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});

const slides = [
    { id: 1, content: "Slide 1", color: "#1e1e1e" },
    { id: 2, content: "Slide 2", color: "#1e1e1e" },
    { id: 3, content: "Slide 3", color: "#1e1e1e" },
];

const products = [
    { id: 1, name: "Nike Running Shoe", size: "EU38", color: "Black/White", price: "$69.99", description: "Crossing hardwood comfort with off-court flair.", image: "/shoe1.png" },
    { id: 2, name: "Adidas Ultraboost", size: "EU40", color: "Gray", price: "$89.99", description: "Engineered for ultimate comfort and performance.", image: "/shoe2.png" },
    { id: 3, name: "Puma Sport Sneaker", size: "EU42", color: "Blue", price: "$79.99", description: "Built for style and all-day support.", image: "/shoe3.png" },
    { id: 4, name: "Reebok Classic", size: "EU41", color: "White", price: "$59.99", description: "Retro-inspired design with modern updates.", image: "/shoe4.png" },
    { id: 5, name: "Asics Gel Runner", size: "EU39", color: "Black", price: "$99.99", description: "Perfect for long-distance runners.", image: "/shoe5.png" },
];

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [checked, setChecked] = useState(true);
    const [loading, setLoading] = useState(true);
    const [animationStyle, setAnimationStyle] = useState<any>({
        backgroundColor: '#fff',
        opacity: 1,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setChecked(false);
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
                setChecked(true);
            }, 200); // Transition duration
        }, 3000); // Auto-slide duration

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        const animationTimer = setTimeout(() => {
            setAnimationStyle({
                backgroundColor: '#1e1e1e',
                opacity: 0,
                transition: 'background-color 3s ease, opacity 3s ease',
            });
        }, 1000); // Start animation after 1 second

        const timer = setTimeout(() => {
            setLoading(false);
        }, 3100); // 5 seconds total loading time

        return () => {
            clearTimeout(animationTimer);
            clearTimeout(timer);
        };
    }, []);

    if (loading) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    ...animationStyle,
                }}
            >

                <Image src={logo} alt="Logo" style={{ width: 200, height: 'auto', opacity: animationStyle.opacity }} />

            </Box>
        );
    }




    return (
        <div className={`${roboto.className} p-4`} style={{ backgroundColor: '#1e1e1e', color: '#fff', minHeight: '100vh' }}>
            <Head>
                <title>F6 Project</title>
                <meta name="description" content="Welcome to the F6 project" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <AppBar position="static" sx={{ background: "#1e1e1e" }}>
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

            {/* Section 1: Carousel */}
            <section className="w-full bg-gray-100">
                <Box sx={{ position: "relative", overflow: "hidden", height: 256, background: "#1e1e1e" }}>
                    {slides.map((slide, index) => (
                        <Slide
                            key={slide.id}
                            direction='right'
                            in={checked && index === currentSlide}
                            mountOnEnter
                            unmountOnExit

                        >
                            <Box
                                sx={{
                                    height: 256,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    background: slide.color,
                                    color: "white",
                                    position: "absolute",
                                    width: "100%",
                                }}
                            >
                                <Typography variant="h4">{slide.content}</Typography>
                            </Box>
                        </Slide>
                    ))}
                </Box>
            </section>

            {/* Section 2: Programs */}
            <section className="w-full py-12 " style={{ background: "#1e1e1e" }}>
                <Typography variant="h4" align="center" gutterBottom>Programs</Typography>
                <Grid container spacing={4} justifyContent="center">
                    {["VIP", "Pro", "Elite", "ثبت نام مقدماتی"].map((title, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card


                                sx={{
                                    backgroundColor: "rgba(15, 15, 15, 0.8)",
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    backdropFilter: "blur(10px)",
                                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.6)",
                                }}


                            >
                                <Box
                                    sx={{
                                        height: 140,
                                        backgroundImage: `url('/program-${index + 1}.jpg')`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                />
                                <CardContent className="text-center">
                                    <Typography variant="h6" style={{ color: "#fff", fontWeight: 'bold' }}>{title}</Typography>
                                    <Typography variant="body2" style={{ color: "#aaa" }}>Detailed info here...</Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Button variant="contained" size="small" sx={{ backgroundColor: '#555', color: '#fff' }}>Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </section>

            {/* Section 3: Facilities */}
            <section className="w-full py-12" style={{ backgroundColor: '#1e1e1e' }}>
                <Typography variant="h4" align="center" gutterBottom style={{ color: '#fff' }}>Facilities</Typography>
                <Grid container spacing={4} justifyContent="center">
                    {['کلاس آنلاین', 'تغذیه و افزایش قد', 'فیزیوتراپی', 'بدنسازی', 'روانشناسی'].map((title, index) => (
                        <Grid item xs={12} sm={6} md={2.4} key={index}>
                            <Card sx={{
                                backgroundColor: "rgba(15, 15, 15, 0.8)",
                                borderRadius: 3,
                                overflow: "hidden",
                                backdropFilter: "blur(10px)",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.6)",
                            }}>
                                <CardContent className="text-center">
                                    <Typography variant="h6" style={{ color: "#fff" }}>{title}</Typography>
                                    <Typography variant="body2" style={{ color: "#aaa" }}>Subtitle</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </section>

            {/* Section 4: Shop */}
            <section className="w-full py-12" style={{ backgroundColor: '#1e1e1e' }}>
                <Typography variant="h4" align="center" gutterBottom style={{ color: '#fff' }}>Shop</Typography>
                <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2, padding: 2 }}>
                    {products.map((product) => (

                        <Card key={product.id} sx={{
                            minWidth: 300, maxWidth: 300, flexShrink: 0,




                            backgroundColor: "rgba(15, 15, 15, 0.8)",
                            borderRadius: 3,
                            overflow: "hidden",
                            backdropFilter: "blur(10px)",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.6)",








                        }}>
                            <Box sx={{ position: 'relative', height: 150, backgroundColor: '#555', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
                                <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                            </Box>
                            <CardContent sx={{ textAlign: 'center', padding: 2 }}>
                                <Typography variant="h6" style={{ color: '#fff', fontWeight: 'bold' }}>{product.name}</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, marginY: 1 }}>
                                    <Typography variant="caption" style={{ backgroundColor: '#555', padding: '2px 6px', borderRadius: 4, color: '#fff' }}>{product.size}</Typography>
                                    <Typography variant="caption" style={{ backgroundColor: '#555', padding: '2px 6px', borderRadius: 4, color: '#fff' }}>{product.color}</Typography>
                                </Box>
                                <Typography variant="body2" style={{ color: '#aaa', marginBottom: 1 }}>{product.description}</Typography>
                                <Typography variant="h6" style={{ color: '#fff', fontWeight: 'bold' }}>{product.price}</Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center', padding: 2 }}>
                                <Button variant="contained" style={{ backgroundColor: '#555', color: '#fff' }}>Add to cart</Button>
                            </CardActions>
                        </Card>
                    ))}
                </Box>
            </section>

            {/* Section 5: Events */}
            <section className="w-full py-12" style={{ backgroundColor: '#1e1e1e' }}>
                <Typography variant="h4" align="center" gutterBottom style={{ color: '#fff' }}>Events</Typography>
                <Grid container spacing={4} justifyContent="center">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Grid item xs={12} sm={6} md={2.4} key={index}>
                            <Card sx={{
                                backgroundColor: "rgba(15, 15, 15, 0.8)",
                                borderRadius: 3,
                                overflow: "hidden",
                                backdropFilter: "blur(10px)",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.6)",
                            }}>
                                <Box
                                    sx={{
                                        height: 140,
                                        backgroundImage: `url('/event-${index + 1}.jpg')`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                />
                                <CardContent className="text-center">
                                    <Typography variant="h6" style={{ color: "#fff", fontWeight: 'bold' }}>
                                        Event {index + 1}
                                    </Typography>
                                    <Typography variant="body2" style={{ color: "#aaa" }}>
                                        Description or subtitle here
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Button variant="contained" size="small" sx={{ backgroundColor: '#555', color: '#fff' }}>
                                        View Details
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </section>

            {/* Footer */}
            <footer className="w-full py-4" style={{ backgroundColor: '#1e1e1e', color: '#fff', textAlign: 'center' }}>
                &copy; {new Date().getFullYear()} F6 Project. All rights reserved.
            </footer>
        </div>
    );
}
