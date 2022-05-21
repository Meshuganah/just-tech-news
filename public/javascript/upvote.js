async function upvoteClickHandler(event) {
    event.preventDefault();

    //Splits out the post_id from the URL
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    //Fetch request to api routes
    const response = await fetch('/api/posts/upvote', {
        method: 'PUT',
        body: JSON.stringify({
            post_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);