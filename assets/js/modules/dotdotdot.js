export default function dotdot() {
    $(document).ready(function() {
        const message = $('[role="message"]');
        const title = $('[role="title"]');

        message.dotdotdot({
            ellipsis: "...",
            truncate: "letter",
            fallbackToLetter: true,
            after: null,
            watch: false,
            height: 100,
            tolerance: 0,
        });

        title.dotdotdot({
            ellipsis: "...",
            truncate: "letter",
            fallbackToLetter: true,
            after: null,
            watch: false,
            height: 50,
            tolerance: 0,
        });
    });
}
dotdotdot();
