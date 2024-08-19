function Commands() {
    return (
        <>
            <div>
                <h2 className="textcenter">Commands to bot</h2>
                <hr />
                <ul>
                    <li>
                        <h3>/giveaway</h3>
                        <p>Fetches the latest free giveaways available. Displays the giveaway's title, instructions, end date, and platforms.</p>
                        <p><strong>Usage:</strong> /giveaway</p>
                        <p><strong>Features:</strong> Fetches the most recent giveaway, provides details including instructions and platforms.</p>
                    </li>
                    <li>
                        <h3>/game</h3>
                        <p>Searches for game offers. You can find basic information or the best deal for a specified game title.</p>
                        <p><strong>Usage:</strong> /game <code>title</code> [<code>search_for_cheapest</code>]</p>
                        <p><strong>Options:</strong></p>
                        <ul>
                            <li><code>title</code>: Title of the game (required).</li>
                            <li><code>search_for_cheapest</code>: Boolean option to find the best deal (optional).</li>
                        </ul>
                        <p><strong>Features:</strong> Provides game information or the cheapest available deal based on user input.</p>
                    </li>
                    <li>
                        <h3>/gif</h3>
                        <p>Searches for GIFs based on a query. If no query is provided, it defaults to a funny GIF.</p>
                        <p><strong>Usage:</strong> /gif [<code>query</code>]</p>
                        <p><strong>Options:</strong></p>
                        <ul>
                            <li><code>query</code>: Search query for GIFs (optional).</li>
                        </ul>
                        <p><strong>Features:</strong> Returns a random GIF based on the search query or a default query.</p>
                    </li>
                    <li>
                        <h3>/deal</h3>
                        <p>Gets the latest 9 game deals from "IsThereAnyDeal". Users can navigate through these deals using buttons.</p>
                        <p><strong>Usage:</strong> /deal</p>
                        <p><strong>Features:</strong> Displays the most recent 9 game deals with navigation buttons for previous and next deals.</p>
                    </li>
                    <li>
                        <h3>/setchannel</h3>
                        <p>Sets the channel where the bot will send notifications. Only one channel can be set per server.</p>
                        <p><strong>Usage:</strong> /setchannel</p>
                        <p><strong>Permissions Required:</strong> Users must have the "Kick Members" permission to use this command.</p>
                        <p><strong>Features:</strong> Allows setting the notification channel; only one channel can be configured.</p>
                    </li>
                    <li>
                        <h3>/remchannel</h3>
                        <p>Removes the channel where the bot sends notifications. This will clear the channel settings for notifications.</p>
                        <p><strong>Usage:</strong> /remchannel</p>
                        <p><strong>Permissions Required:</strong> Users must have the "Kick Members" permission to use this command.</p>
                        <p><strong>Features:</strong> Removes the configured notification channel settings.</p>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Commands;
