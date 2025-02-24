export default function HomeBody(){
    return (
        <div className="p-4">
            <h1>Assignment: Exploring Front-End Development Components</h1>
            <h2>Scenario</h2>
            <p>New Generation High School is a new school that wants to create a student portal. The administrator of the web application wants to be able to see a list of students and modify the student list to add new students.</p>
            <h2>Equipment and Materials</h2>
            <p>For this assignment, you will need:</p>
            <ul className="list-disc list-inside ml-4">
                <li>Node.js</li>
                <li>Next.js</li>
            </ul>
            <h2>Instructions</h2>
            <ul className="list-decimal list-inside ml-4">
                <li>Working in groups, as indicated by your instructor, review the scenario and the Marking Criteria section below.</li>
                <li>Install Node.js.</li>
                <li>Create a new Next.js project.</li>
                <li>Create a list of students in JSON format that contains data for five students.</li>
                <li>Create a single page web application that includes the following:</li>
                <ul className="list-disc list-inside ml-4">
                    <li>A custom static navbar</li>
                    <li>A list of students</li>
                    <li>A footer that includes the school information</li>
                    <li>Student information that contains:</li>
                        <ul className="list-none list-inside ml-6">
                            <li>• Student’s first name and last name</li>
                            <li>• Student’s date of birth</li>
                            <li>• Student’s current grade</li>
                        </ul>
                    <li>A form to add new students</li>
                    <em className="text-gray-500">Notes: 
                        <p>The components must contain data validation.</p>
                        <p>You must use custom components for each of the elements mentioned above. Feel free to create any other components as necessary. Choose whether a component will be a client and server component.</p>            
                    </em>
                </ul>
                <li>Deploy the website.</li>
                <li>Submit the following to Brightspace by the posted due date:</li>
                <ul className="list-disc list-inside ml-4">
                    <li>A link to your GitHub repository</li>
                    <li>A link to your deployed website</li>
                </ul>
                <em className="text-gray-500">Notes: <p>Only one submission is required per group.</p></em> 
            </ul>
        </div>
    )
}