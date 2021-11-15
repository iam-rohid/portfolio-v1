export const BlogsQuery = `
{
  slug
  title
  excerpt
  createdAt
  coverPhoto {
    url
  }
  category {
    slug
    title
  }
  createdBy {
    id
    name
    picture
  }
  tags {
    slug
    name
    backgroundColor {
      css
      rgba {
        r
        g
        b
        a
      }
    }
    foregroundColor {
      css
      rgba {
        r
        g
        b
        a
      }
    }
  }
}`;
