import { Component } from '@angular/core';

interface Blog {
    category: string;
    title: string;
    image: string;
    link: string;
    buttonText?: string;
}

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
    title: string = 'Recent Blogs';

    blogFeatured: Blog = {
        category: 'Design Best Practices',
        title: 'Key principles to improve workflow efficiency',
        image: 'assets/images/content/blog-1.jpg',
        link: '#',
        buttonText: 'Read More',
    };

    blogs: Array<Blog> = [
        {
            category: 'UI Trends 2025',
            title: 'Emerging patterns in user interface design',
            image: 'assets/images/content/blog-2.jpg',
            link: '#',
        },
        {
            category: 'Productivity Tips',
            title: 'Boost your output with simple methods',
            image: 'assets/images/content/blog-3.jpg',
            link: '#',
        },
        {
            category: 'Productivity Tips',
            title: 'Strategies for effective home-office routines',
            image: 'assets/images/content/blog-4.jpg',
            link: '#',
        },
    ];
}
