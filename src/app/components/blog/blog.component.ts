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
        category: 'BEST PRACTICES',
        title: 'In design active temper be uneasy. Thirty for remove plenty regard.',
        image: 'assets/images/content/blog-1.jpg',
        link: '#',
        buttonText: 'Read More',
    };

    blogs: Array<Blog> = [
        {
            category: 'BEST PRACTICES',
            title: 'Partiality on or continuing particular principles as.',
            image: 'assets/images/content/blog-2.jpg',
            link: '#',
        },
        {
            category: 'BEST PRACTICES',
            title: 'Village did removed enjoyed explain',
            image: 'assets/images/content/blog-3.jpg',
            link: '#',
        },
        {
            category: 'BEST PRACTICES',
            title: 'Wise busy past both park when an ye no. Nay likely her length.',
            image: 'assets/images/content/blog-4.jpg',
            link: '#',
        },
    ];
}
