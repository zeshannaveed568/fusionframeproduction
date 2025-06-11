import { CloudUpload, Scissors, CheckCircle, Download, MailCheck, Phone, Instagram, Linkedin } from 'lucide-react';
import whatsappIcon from './public/assets/whatsapp.png'
import whatsappIconWhite from './public/assets/whatsapp-white.png'
import Hasnat from './public/assets/hasnat.webp'
import Aafaq from './public/assets/aafaq.webp'
import Shayan from './public/assets/shayan.webp'
import Image from 'next/image';

export const howItWorksData = [
    {
        title: "Upload",
        description:
            "Upload your raw video clips to Google Drive, Dropbox, or any similar cloud storage service. Provide us with your editing instructions, or let us work our magic!",
        icon: CloudUpload,
    },
    {
        title: "Edit",
        description:
            "Our team of professional video editors will work on your project. We will edit your video according to your instructions and deliver a high-quality video.",
        icon: Scissors,
    },
    {
        title: "Review",
        description:
            "Review the edited video. If you need any changes, let us know. We will make the necessary changes and deliver the final video.",
        icon: CheckCircle,
    },
    {
        title: "Download",
        description:
            "Download the final video. You can download the video from our platform or we can deliver it to you via Google Drive, Dropbox, or any similar cloud storage service.",
        icon: Download,
    },
];


export const InNumbers = [
    {
        id: 1,
        title: "Edited Videos",
        number: "1000+",
    },

    {
        id: 2,
        title: "Happy Clients",
        number: "500+",
    },

    {
        id: 3,
        title: "Years of Experience",
        number: "5+",
    },
];


export const ourExpertise = [
    {
        title: "Multicamera Editing",
        description:
            "● We will auto-sync your multicamera interview and edit it into a Hollywood-tier production. ● You can send separate audio and video feeds from as many cameras as you want. ● We will handle all post-production aspects for you."
    },
    {
        title: "Color Correction and Grading",
        description:
            "● Adjusting color wheels, sharpness, shadows, highlights, and exposure is our way to unwind. ● We'll tweak the colors in your videos to perfection."
    },
    {
        title: "Crazy Cuts and Transitions",
        description:
            "● We use templates, plugins, or presets to elevate your transitions to the next level. ● Fast, dynamic, mind-bending transitions are our specialty."
    },
    {
        title: "1080p, 4K, or Vertical",
        description:
            "● We can edit videos in any aspect ratio you desire. ●     Whether it's the classic 1080p, the new 4K resolution, or the viral short vertical format for TikTok or YouTube Shorts, just tell us what you need."
    },
    {
        title: "Professional Editors",
        description:
            "● Our team consists of video editors with backgrounds in filmmaking.● You'll work with trained professionals, and each client gets one or more dedicated video editors based on the amount of post-production work required."
    },
    {
        title: "Stock Music and Footage",
        description:
            "● Our service includes licensed music and beautiful stock footage used as B-roll when needed.● No need for you to have a subscription to any stock footage or music licensing platform; our licenses cover all the assets used in your videos."
    },
    {
        title: "Motion Graphics",
        description:
            "● We can include animated text callouts, pop-ups, or titles in the videos we edit. ● Modern-looking lower thirds and social media callouts are also included, making your videos look fresh and clean."
    },
    {
        title: "Audio Editing and Mixing",
        description:
            "● We will clean up your audio, balance it, and mix it with background music. ● Background noises and hisses will be removed, making you sound as crisp as possible using advanced equalizing, denoising, hard limiting, and other advanced audio techniques."
    }
];

export const whatWedo = [
    {
        title: "Wedding Video Editing",
        description:
            "Capturing the magic of a wedding day requires a keen eye and a delicate touch. We specialize in creating stunning wedding videos that encapsulate the emotions and moments of your special day. From highlights and teasers to full-length films, our team is dedicated to crafting beautiful memories that you will cherish forever.",
        benefits: [
            "● Emotionally captivating highlights",
            "● Seamless transitions and professional editing",
            "● High-quality visuals and audio",
        ],
    },
    {
        title: "Podcast Video Editing",
        description:
            "Podcasters, including those with over 1M subscribers, rely on us to edit promotional videos, interviews, stream shows, and any type of video content. In the fast-paced world of content creation, where videos are churned out like treats from a candy machine, top-notch video editing is a necessity to ensure the highest quality.",
        benefits: [
            "● Dedicated team to lighten your workload",
            "● Maintain high standards demanded by large broadcasters",
            "● Crisp, tight, and fabulous multi-camera video edits",
        ],
    },
    {
        title: "Real Estate Video Editing",
        description:
            "Real estate is much more appealing in a cool video than in static pictures, and many realtors have realized this. However, creating that engaging video requires time and skill that not all real estate professionals have. Whether you have an idea, a few slides, or an iPhone clip, our video editors can transform your raw footage into a magnificent marketing tool. We offer affordable video editing services for small businesses to help them reach their full potential.",
        benefits: [
            "● Engaging real estate videos",
            "● Affordable services for small businesses",
            "● Transform raw footage into marketing tools",
        ],
    },
    {
        title: "YouTube Video Editing",
        description:
            "YouTube can be incredibly lucrative these days, but it requires consistency, regular posting, and never missing a deadline. We know this firsthand from our YouTuber clients. At some point, outsourcing video editing becomes essential, allowing creators to focus on producing more content. Many YouTubers have turned to Veedyou’s video editing services to achieve this, and it has worked wonders for them.",
        benefits: [
            "● Consistency in video posting",
            "● Focus on content creation",
            "● Top-notch editing for better engagement",
        ],
    },
    {
        title: "Vertical Video Editing",
        description: "Vertical videos optimized for social media platforms.",
        benefits: ["● Optimized for social media", "● Engaging vertical format", "● High-quality editing"],
    },
    {
        title: "Corporate Video Editing",
        description:
            "We work with several large corporations, including multinational companies with clearly defined brand identities, missions, and visions. These companies use our video editing services to create professional, branded, and crisp-looking videos with specific purposes. For these clients, we often provide voice-over recordings, stock footage, and licensed music.",
        benefits: [
            "● Professional and branded videos",
            "● Voice-over recordings",
            "● Stock footage and licensed music",
        ],
    },
];

export const ContactData = [
    {
        icon: <MailCheck size={44} color='' fill='black' stroke='#F9DB6D' />,
        title: 'Email us',
        desc: 'Email us for general queries, including marketing and partnership opportunities.',
        ctaText: 'zeshannaveed568@gmail.com',
        ctaUrl: 'https://fusionframeproduction.vercel.app/',
    },
    {
        icon: <Phone size={44} color='black' fill='black' stroke='#F9DB6D' />,
        title: 'Call us',
        desc: 'Call us to speak to a member of our team. We are always happy to help.',
        ctaText: '+92 3335424738',
        ctaUrl: 'https://fusionframeproduction.vercel.app/',
    },
    {
        icon: <Image src={whatsappIcon} alt="WhatsApp" style={{ width: 44, height: 44, objectFit: 'contain' }} />,
        title: 'WhatsApp us',
        desc: 'WhatsApp us for general queries, including marketing and partnership opportunities.',
        ctaText: '+92 3335424738',
        ctaUrl: 'https://fusionframeproduction.vercel.app/',
    },
]

export const faqs = [
    {
        question: "What services do you offer?",
        answer:
            "We offer video editing services including Wedding Highlight & Teaser, Real Estate Videos, Corporate Videos, and YouTube Videos.",
    },
    {
        question: "How can I get a quote?",
        answer:
            'You can get a quote by clicking on the "Get a Quote" button on our homepage and filling out the form with your project details.',
    },
    {
        question: "What is your turnaround time?",
        answer:
            "Our standard turnaround time is 3-5 business days, but it may vary depending on the project complexity and requirements.",
    },
    {
        question: "Do you offer revisions?",
        answer:
            "Yes, we offer revisions to ensure you are satisfied with the final product. The number of revisions may depend on the package you choose.",
    },
    {
        question: "How do I contact customer support?",
        answer:
            "You can contact our customer support by emailing us at team.fusionframeprod@gmail.com or Leave a What'sApp Message at +44 7460 615720.",
    },
];

export const teamMembers = [
    {
        name: "Hasnat Ansar",
        role: "Video Editor",
        imageSrc: <Image
            alt={"Hasnat Ansar"}
            className='object-cover rounded-xl aspect-square'
            src={Hasnat}
            width={300}
            height={300}
        />,
        imageAlt: "Hasnat Ansar",
    },
    {
        name: "Aafaq Ahmed",
        role: "Video Editor",
        imageSrc: <Image
            alt={"Aafaq Ahmed"}
            className='object-cover rounded-xl aspect-square'
            src={Aafaq}
            width={300}
            height={300}
        />,
        imageAlt: "Aafaq Ahmed",
    },
    {
        name: "Shayan Mehmood",
        role: "Video Editor",
        imageSrc: <Image
            alt={"Shayan Mehmood"}
            className='object-cover rounded-xl aspect-square'
            src={Shayan}
            width={300}
            height={300}
        />,
        imageAlt: "Shayan Mehmood",
    },
];

export const weddingServices = [
    {
        title: "Wedding Video Invitations",
        description: [
            "● Announce your wedding with a Hollywood-style video.",
            "● Shoot it, and we'll make it awesome."
        ]
    },
    {
        title: "Video Wishes for the Newlyweds",
        description: [
            "● Send a surprise video message from friends and family.",
            "● We'll create an emotional video they’ll cherish forever."
        ]
    },
    {
        title: "Re-edit Your Old Wedding Video",
        description: [
            "● Refresh your old DVD or VHS wedding footage.",
            "● Enjoy your wedding video on any device."
        ]
    },
    {
        title: "Re-edit a Wedding Video You Don’t Like",
        description: [
            "● Unhappy with your current edit? We'll re-edit it to your specifications.",
            "● Includes three free revisions."
        ]
    },
    {
        title: "Wedding Videographers & Studios",
        description: [
            "● Save time by outsourcing your editing to us.",
            "● We handle everything from culling footage to color grading, allowing you to focus on shooting and acquiring new clients."
        ]
    }
];


export const podcastServices = [
    {
        title: "Podcast Trailer",
        description: "● Announce your podcast in a fun, modern way with a professionally edited video trailer."
    },
    {
        title: "Video Messages",
        description: "● Send a personalized video message to your listeners, edited to perfection for emotional impact."
    },
    {
        title: "Re-edit Old Podcast Videos",
        description: "● Update and enhance your old podcast videos with fresh editing and modern digital quality."
    },
    {
        title: "Fix Disliked Edits",
        description: "● If you're not happy with your current podcast video, we can re-edit it to meet your vision. Enjoy three free revisions to ensure you're thrilled with the result.",
        features: [
            "Three free revisions"
        ]
    }
]

export const socialServices = [
    {
        title: "Social Media Video Content",
        description: [
            "● Elevate your brand with engaging, high-quality video content.",
            "● From conceptualization to final edit, we'll handle it all."
        ]
    },
    {
        title: "Custom Social Media Ads",
        description: [
            "● Create eye-catching ads that captivate your audience.",
            "● Tailored video ads designed to boost your engagement and conversions."
        ]
    },
    {
        title: "Social Media Reels Editing",
        description: [
            "● Transform your raw footage into dynamic reels for Instagram, TikTok, and more.",
            "● Optimize for maximum impact and viewer retention."
        ]
    },
    {
        title: "Content Repurposing & Enhancement",
        description: [
            "● Give new life to your existing content with professional edits.",
            "● Make your old videos fresh and relevant for today's social media landscape."
        ]
    },
    {
        title: "Social Media Video Management",
        description: [
            "● Streamline your content creation with our end-to-end video management services.",
            "● From editing to scheduling, we handle it all so you can focus on growing your online presence."
        ]
    }
];
