<script>
    /* Starting parameters, wheel angle, etc. */
    let angle = 100;            // starting wheel rotation angle 
    let bx = 600 + 0;           // starting wheel position 
    let wx = 600 + 50;          // starting bike frame position 
    let T = null;               // animation timer object
    /* All resources loaded, now what? */
    window.onload = () => {
        /* Animate the bike & the wheel */
        T = setInterval(() => {
            $("#wheel").css({
                transform: 'rotate(' + angle + 'deg)',
                left: wx + 'px'}, 0);
            /* Move the bike frame */
            $("#bicycle-end").css({left: bx + 'px'}, 0);
            /* progress counters */
            angle--; // rotate the wheel by -1 degree
            bx--;    // move the bike by -1px
            wx--;    // move the wheel by -1px
             /* bike reached the end, of animation, reset counter */
             if (bx <= 249) {
                clearInterval(T);
                T = null;
            }
        }, 5); // animation delay in milliseconds
    }
</script>
