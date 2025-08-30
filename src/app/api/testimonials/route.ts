import { NextResponse } from "next/server";

export async function GET() {
return NextResponse.json([
    {
        name: "Sophia Lee",
        feedback: "The session was life-changing! I got so much clarity about my career path.",
      imageUrl: "https://images.presentationgo.com/2025/05/confident-businesswoman-presentation.jpg",
    },
    {
      name: "David Kim",
      feedback: "Accurate predictions and very professional. Highly recommended.",
      imageUrl: "https://media.sciencephoto.com/image/f0160101/800wm/F0160101-Portrait_confident_corporate_businessman.jpg",
    },
    {
      name: "Emma Watson",
      feedback: "I feel more confident about my future now. Amazing experience!",
      imageUrl: "https://thumbs.dreamstime.com/b/portrait-paralegal-woman-smile-office-first-day-law-firm-confident-corporate-happy-legal-assistant-female-person-385551593.jpg",
    },
    {
        name: "Priya Sharma",
        feedback: "The advice was spot on. I feel motivated to pursue my goals.",
        imageUrl: "https://thumbs.dreamstime.com/b/confident-black-business-man-stylish-suit-standing-folded-arms-rooftop-n-office-block-looking-camera-69650703.jpg",
    },
    {
        name: "Liam Smith",
        feedback: "Great experience, very friendly and knowledgeable.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxBqvRk8q5qvmq2AgL9Wg-H1UEgDWzA7uGYw&s",
    },
    {
        name: "Olivia Brown",
        feedback: "I learned a lot about myself. Highly recommend!",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSblRUloX3UCcoPl4Q5QaE-9x4mUl5WY09kjA&s",
    },
    {
        name: "Noah Wilson",
        feedback: "Professional and insightful. Will book again.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp-yYR-PtKK_UJW9Z0KdSmU-42GGUSlhzppA&s",
    },
    {
        name: "Ava Patel",
        feedback: "Helped me make an important decision. Thank you!",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeXRVRxmaJxB1vBFqQrbhlOz4_WFjaBdjgw&s",
    },
    {
        name: "Mia Chen",
        feedback: "Very supportive and encouraging. Great session!",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHOU2Ao5y85EW82Bi1JebT0V29ed8W2YETg&s",
    },
  ]);
}
