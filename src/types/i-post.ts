
export default interface IPost {
    id: string;
    uuid: string;
    title: string;
    slug: string;
    html: string;
    comment_id: string;
    feature_image: string;
    featured: boolean;
    visibility: string;
    created_at: string;
    updated_at: string;
    published_at: string;
    custom_excerpt?: any;
    codeinjection_head?: any;
    codeinjection_foot?: any;
    custom_template?: any;
    canonical_url?: any;
    url: string;
    excerpt: string;
    reading_time: number;
    access: boolean;
    comments: boolean;
    og_image?: any;
    og_title?: any;
    og_description?: any;
    twitter_image?: any;
    twitter_title?: any;
    twitter_description?: any;
    meta_title?: any;
    meta_description?: any;
    email_subject?: any;
    frontmatter?: any;
    feature_image_alt?: any;
    feature_image_caption?: any;
  }
  


  
