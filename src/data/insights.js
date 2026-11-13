import { practices } from "@/data/practices";

// Newsletters and blog posts, newest first. Each item gets its own page at /insights/<slug-of-title>.
// Article pages show the excerpt, then the `body` if there is one. Body markup: blank lines separate blocks;
// "## " starts a section heading, "### " a subheading, "> " a highlighted line; lines starting "- " form a bullet
// list; **text** is bold. Optional fields:
//   featured       true to feature the item at the top of /insights (see featuredInsight below)
//   practiceAreas  practice titles, exactly as in src/data/practices.js, linked from the article page
//   image, imageAlt a cover image; without one, the featured slot uses the first practice area's image
export const newsletters = [
  {
    date: "November 2026", title: "Limitation of Liability Clauses: What Happens When a Contract Goes Wrong?", read: "7 min", featured: true, practiceAreas: ["Corporate Advisory"],
    excerpt: "Clause of the Month: a plain-language teardown of what a limitation of liability clause means, how it works, and what businesses should consider before agreeing to one.",
    image: "/images/insights/limitation-of-liability-clauses.webp", imageAlt: "A hand holding a pen over a contract, with the limitation of liability clause highlighted",
    body: `Contracts are often signed when business relationships are going well. Both parties are optimistic, the terms appear acceptable, and everyone expects the arrangement to work as planned.

But what happens when it doesn't?

A supplier fails to deliver. A service provider makes a costly mistake. A project is delayed, causing financial losses. Suddenly, the question is no longer what the parties agreed to do, but who should bear the consequences when something goes wrong.

This is where a limitation of liability clause becomes important.

At Rogad Chambers, we believe that understanding a contract should not require a law degree. In this edition of Clause of the Month, we break down what a limitation of liability clause means, how it works, and what businesses should consider before agreeing to one.

## 1. What Is a Limitation of Liability Clause?

In simple terms, a limitation of liability clause sets boundaries on the financial responsibility one or both parties may bear if something goes wrong under a contract.

Depending on how it is drafted, the clause may limit the amount a party can be required to pay, exclude certain categories of loss, or establish circumstances in which liability will be restricted.

Consider this example.

A Nigerian company engages a technology provider to develop a business management platform for ₦10 million. The contract contains a clause limiting the provider's total liability to the fees paid under the agreement.

The provider's failure to deliver the agreed functionality subsequently causes the company losses that it estimates at ₦30 million.

Can the company automatically recover the full ₦30 million?

Not necessarily. The answer will depend on the precise wording of the contract, the nature of the breach, the losses established, applicable legal principles and whether the limitation is enforceable in the circumstances.

The clause may significantly affect the company's recovery. That is why it deserves attention before the contract is signed, rather than after a dispute has arisen.

## 2. What Does the Clause Actually Do?

Although limitation of liability provisions vary, they commonly address three areas.

### A. A financial cap

The contract may specify the maximum amount a party can be required to pay for certain claims.

For example:

> “The aggregate liability of the Service Provider arising out of or in connection with this Agreement shall not exceed the total fees paid to the Service Provider under this Agreement.”

In plain language, the provider is seeking to limit its total financial exposure to the fees it has received.

However, the meaning of “aggregate liability,” the period covered and the fees included must be examined carefully. A cap tied to fees paid may be inadequate where the potential consequences of a breach substantially exceed the contract price.

### B. Exclusion of certain losses

Some clauses attempt to exclude particular types of loss, such as indirect or consequential losses, loss of profits, or loss of business opportunities.

For example:

> “Neither party shall be liable to the other for any indirect or consequential loss, including loss of profits, arising out of this Agreement.”

The commercial intention is to define which losses the parties will bear themselves if a dispute arises.

But expressions such as “indirect loss” and “consequential loss” can raise questions of interpretation. The effect of the exclusion will depend on the contract's wording, the applicable law and the circumstances of the claim.

### C. Exceptions to the limitation

A carefully negotiated clause may identify liabilities that remain outside the cap or are not covered by particular exclusions.

Depending on the transaction, the parties may need to consider exceptions for fraud, wilful misconduct, confidentiality breaches, data-protection obligations, intellectual property infringement, or other specifically identified risks.

These exceptions should not be copied indiscriminately from another contract. They should reflect the transaction, the parties' risk exposure and the applicable law.

## 3. Why Should Business Owners Care?

A limitation of liability clause is not merely technical wording inserted near the end of a contract. It can affect the commercial value of the entire agreement.

Consider three common situations.

**When engaging a service provider:** If the provider's mistake could cause substantial operational or financial damage, a cap limited to a small portion of the contract price may leave your business exposed.

**When supplying goods or services:** If you are the service provider, unlimited liability may expose your business to claims disproportionate to the fees earned. A properly negotiated cap can help define and manage that risk.

**When entering a technology or data-related agreement:** A general liability cap may not adequately address the consequences of a data breach, confidentiality failure or intellectual property dispute. The contract should allocate these risks deliberately.

The objective is not necessarily to eliminate liability. It is to ensure that the allocation of risk is understood, commercially reasonable and appropriate for the transaction.

## 4. Five Questions to Ask Before Accepting the Clause

Before signing a commercial agreement, ask the following questions:

### 1. What is the liability cap?

Is it tied to the total contract value, fees paid, fees payable over a specified period, or another amount? Does the figure reflect the potential risk?

### 2. Which losses are excluded?

Does the clause exclude lost profits, business interruption, data loss or other categories of loss that could be significant to your business?

### 3. Does the cap apply to every claim?

Check whether the provision covers contractual claims only or also extends to other claims arising from the relationship. Review how it interacts with indemnities, warranties and other provisions.

### 4. Are there appropriate exceptions?

Consider whether particular risks should be treated differently from ordinary contractual breaches. The answer will depend on the nature of the agreement and the applicable law.

### 5. Does the clause work alongside the rest of the contract?

A limitation of liability clause should be read together with the indemnity, insurance, termination, confidentiality, dispute-resolution and other relevant provisions. One clause may undermine or materially alter the effect of another.

## 5. Can a Limitation of Liability Clause Be Enforced in Nigeria?

The presence of a limitation of liability clause does not automatically make every limitation enforceable.

Its effect depends on the language used, the contractual context, the nature of the claim and the applicable legal principles. Relevant statutory requirements and public policy considerations may also affect the outcome.

A clause should therefore not be treated as a blanket exemption from every legal consequence of a party's conduct. Nor should a business assume that a broadly worded exclusion will necessarily protect it in every dispute.

For contracts governed by Nigerian law, the appropriate approach is to examine the actual provision in the context of the entire agreement and the applicable law.

This is particularly important for agreements involving substantial financial commitments, regulated activities, sensitive data, intellectual property or significant operational dependencies.

## 6. The Drafting Mistake to Avoid

One common mistake is treating limitation of liability wording as standard boilerplate that can be copied from another agreement without review.

A clause that works for a low-value consultancy engagement may be unsuitable for a construction contract, a technology implementation, a major supply agreement or a long-term commercial partnership.

The correct drafting approach begins with the question: What could realistically go wrong, and how should the resulting risk be allocated between the parties?

The answer should inform the liability cap, the categories of excluded loss, the exceptions and the relationship between the clause and the contract's other protections.

A commercially sound clause should protect legitimate interests without creating an allocation of risk that either party has failed to understand.

## Final Takeaway: Never Sign What You Have Not Properly Understood

A limitation of liability clause can determine how much financial exposure a business accepts and how much it may be able to recover if a contractual relationship breaks down.

Before signing, do not stop at asking whether the clause is present. Ask whether the cap is adequate, whether the exclusions are appropriate, whether the exceptions are clear and whether the provision fits the transaction.

A contract should do more than record the terms of a deal. It should help the parties understand their obligations, allocate risks and manage the consequences of things not going according to plan.

## Need Your Contract Reviewed?

At Rogad Chambers, we advise businesses, entrepreneurs, investors and other clients on commercial contracts, risk allocation, contract negotiation and dispute resolution.

Whether you are preparing a new agreement or reviewing one presented to you by another party, our team can help identify problematic provisions, explain their potential implications and recommend appropriate drafting changes.

> Contact Rogad Chambers to discuss your contract review or commercial legal advisory needs.

This article is for general informational purposes and does not constitute legal advice. The effect of a contractual provision depends on its wording, the circumstances of the transaction and the applicable law. Specific agreements should be reviewed on their own terms.`
  },
  {
    date: "October 2026", title: "The Land Is for Sale. The Documents Look Genuine. So, What Could Go Wrong?", read: "6 min", practiceAreas: ["Energy, Infrastructure & Real Estate"],
    excerpt: "Scam Alert of the Month: property fraud in Nigeria, and how to spot the warning signs before you pay.",
    image: "/images/insights/land-for-sale-scam-alert.webp", imageAlt: "A “Land for Sale” sign on an empty plot, with “This land is not for sale” painted on the wall behind it",
    body: `Imagine finding a piece of land in a promising location. The price is attractive, the agent appears professional, the seller presents documents that look convincing, and you are told that several other buyers are already interested.

You do not want to miss the opportunity, so you decide to make a deposit while the seller promises to provide the remaining documents later.

Weeks after payment, you discover that the person who sold the land may not have had the authority to sell it. Alternatively, the land may be subject to a competing claim, the documents may be unreliable, or the same property may have been offered to other buyers.

What appeared to be a promising investment has suddenly become a legal problem.

Unfortunately, a convincing property transaction is not necessarily a legitimate one.

In this edition of Scam Alert of the Month, Rogad Chambers highlights common warning signs of property fraud in Nigeria and the practical steps buyers can take to protect their money.

## 1. The Warning Signs You Should Never Ignore

### Red flag #1: The seller is rushing you to pay.

You are told that the price will increase tomorrow, another buyer is ready to pay immediately, or you must make a deposit before the seller will permit proper verification.

Urgency is not proof of fraud. However, pressure designed to prevent independent checks is a serious warning sign.

**What to do:** Do not allow a seller's deadline to replace legal due diligence. Verify the transaction before committing your money.

### Red flag #2: The documents look genuine, but nobody has independently verified them.

A seller may present a Certificate of Occupancy, Deed of Assignment, survey plan or other property documents. But possession of a document does not, by itself, establish that the seller has a valid and transferable interest in the property.

The document may require verification, the seller's interest may be disputed, or the land may be affected by other legal or physical restrictions.

**What to do:** Have the relevant documents and ownership claims independently investigated. Depending on the property and location, this may involve searches at the appropriate land registry, survey verification and checks for competing interests or acquisition issues.

### Red flag #3: The agent cannot establish the seller's authority.

An agent may claim to represent a landowner, family, company or developer without adequately establishing the identity of the principal or the authority to conduct the transaction.

In some cases, a person may genuinely be connected to the property but lack the legal authority required to sell it.

**What to do:** Verify the seller's identity, ownership interest and authority to transact. Where a representative is involved, examine the relevant authorisation and establish whether it is sufficient for the proposed transaction.

### Red flag #4: The property has multiple ownership claims.

Two people may claim ownership of the same land. A family member may object to a sale, a previous purchaser may assert an existing interest, or the property may be affected by litigation.

These situations can be complex. Not every competing claim establishes fraud, but any unresolved ownership dispute should be investigated before proceeding.

**What to do:** Investigate the property's ownership history, relevant records and any known disputes. Do not assume that the person physically occupying the land or presenting documents necessarily has the better title.

### Red flag #5: You are asked to pay into an unrelated account.

The person negotiating the transaction may instruct you to transfer money to an individual or company whose relationship with the seller is unclear.

An unusual payment arrangement is not conclusive proof of wrongdoing, but it creates an additional risk that must be resolved before payment.

**What to do:** Confirm the proper recipient, document the agreed payment arrangements and retain evidence of every transaction. Do not rely solely on bank details sent through an informal message.

## 2. Five Checks to Complete Before Paying for Property

Before committing funds to a land or property transaction in Nigeria, take these precautions:

- Verify the title. Establish the nature of the seller's interest and investigate the relevant title records and available evidence of ownership.
- Confirm the identity and authority of the seller. If an agent, attorney, family representative or company is involved, verify the capacity in which that person is acting.
- Verify the land's identity and location. Have the survey information and physical property checked to help identify discrepancies, overlaps or other potential problems.
- Investigate relevant restrictions and competing interests. Depending on the transaction, this may include acquisition status, encumbrances, litigation and existing third-party rights.
- Have the transaction documents reviewed before signing or paying. Ensure that the agreement properly identifies the parties and property, sets out the payment terms and addresses the parties' rights and obligations.

The precise checks required will depend on the location, the nature of the title and the circumstances of the transaction. A standard checklist is a starting point, not a substitute for a property-specific investigation.

## 3. Already Paid? Do Not Make the Situation Worse.

If you suspect that you have been deceived in a property transaction, avoid making further payments until the position has been assessed.

Preserve the evidence, including:

- Payment receipts and bank transfer records.
- Agreements, title documents and survey plans supplied to you.
- Messages, emails and other communications with the seller or agent.
- Advertisements, photographs and details of the property.
- The names and contact details of the people involved.

Seek prompt legal advice on the available options. Depending on the facts, these may include formal demands, appropriate protective measures, civil proceedings or reporting suspected criminal conduct to the relevant authorities.

Do not assume that a refund is automatic or that every failed property transaction amounts to fraud. The appropriate response depends on the evidence, the agreement and the applicable law.

## 4. The Most Expensive Mistake Is Assuming That Everything Checks Out

A seller may appear trustworthy. An agent may have an impressive office. A document may carry official-looking stamps. None of these things, standing alone, replaces independent verification.

The purpose of due diligence is not to make every property transaction unnecessarily difficult. It is to identify material risks before they become expensive disputes.

> A few legal checks before payment may help you avoid months or years of uncertainty afterwards.

## Need Help Verifying a Property?

At Rogad Chambers, we advise property buyers, investors, landowners and other clients on property due diligence, title verification, conveyancing, title perfection and property disputes.

If you are considering a property purchase or have concerns about a transaction already undertaken, our team can help assess the documentation, identify potential legal risks and advise you on the appropriate next steps.

> Before you commit your money, make sure you understand what you are buying and who has the authority to sell it.

Contact Rogad Chambers to discuss your property transaction.

Scam Alert of the Month is an educational newsletter from Rogad Chambers. This edition provides general information and does not constitute legal advice on any particular transaction. The appropriate due-diligence process depends on the property's location, title, transaction structure and applicable law.`
  },
  {
    date: "September 2026", title: "I Have a Deed of Assignment and a Certificate of Occupancy. Is the Property Safe to Buy?", read: "6 min", practiceAreas: ["Energy, Infrastructure & Real Estate"],
    excerpt: "Reader Q&A: one real question, answered in depth. A Rogad Chambers guide to property verification and title due diligence in Nigeria.",
    image: "/images/insights/deed-of-assignment-certificate-of-occupancy.webp", imageAlt: "A lawyer takes a client through a Certificate of Occupancy, a Deed of Assignment and a survey plan",
    body: `Dear Reader,

Buying property is one of the most significant financial decisions many people make. Yet, despite the sums involved, buyers sometimes rely on a few documents, a seller's assurances or the reputation of an estate developer without independently verifying the property's legal status.

One question that deserves a more detailed answer is this:

> “If a seller presents a Deed of Assignment and a Certificate of Occupancy (C of O), can I safely proceed with the purchase?”

The short answer is not necessarily.

These documents can be important, but their existence alone does not establish that every aspect of a proposed property transaction is legally sound. Before committing your money, you need to understand what the documents mean, what they do not establish on their own, and what further checks may be necessary.

## 1. What Does a Certificate of Occupancy Actually Mean?

A Certificate of Occupancy is a document associated with a right of occupancy over land. In Nigeria, its legal significance must be understood within the framework of the Land Use Act and the particular circumstances of the land in question.

However, a buyer should not assume that the mere production of a C of O resolves every question about ownership, the seller's authority to transfer an interest, competing claims or compliance with applicable requirements.

You need to establish whether the document relates to the property being sold, whether it is authentic, the nature of the interest it represents, and whether there are restrictions, encumbrances or other circumstances that could affect the transaction.

**The important lesson:** A C of O is a document to investigate, not a substitute for investigating the property itself.

## 2. What Does a Deed of Assignment Prove?

A Deed of Assignment is generally used to transfer an existing interest in property from one party to another.

It can be an important part of the chain of title. Nevertheless, the existence of a deed does not automatically establish that the person executing it had a valid and transferable interest or that every requirement applicable to the transaction has been satisfied.

For example, questions may arise about whether the assignor acquired a valid interest in the first place, whether the property is correctly identified, whether the deed has been properly executed, and whether relevant consent, stamping and registration requirements have been met.

A deed should therefore be assessed alongside the documents and circumstances from which the seller's interest derives.

## 3. What Should You Verify Before Paying?

Before proceeding with a property purchase, consider the following checks with a qualified property lawyer.

### Verify the root and chain of title.

Establish how the seller acquired the interest being offered for sale. Review the available title documents and investigate whether the chain of transactions raises any concerns.

### Confirm the property's identity.

Compare the survey plan, title documents and physical location. Material discrepancies in the property's description or boundaries should be investigated before completion.

### Conduct appropriate searches.

Depending on the location and circumstances, searches may be required at the relevant land registry and other appropriate public offices to investigate the recorded title, encumbrances, competing interests, acquisition status or other relevant matters.

### Verify the seller's authority.

Confirm that the person or entity selling the property has the legal capacity and authority to undertake the transaction. Additional checks may be necessary for family land, jointly owned property, estates, company-owned property or transactions conducted through an agent.

### Check applicable consent and perfection requirements.

The Land Use Act and other applicable laws may impose requirements relevant to a transfer. The steps required will depend on the nature of the interest, the transaction and the applicable legal framework.

### Investigate possession and competing claims.

Where appropriate, inspect the property and make reasonable enquiries about occupation, disputes, existing interests and other circumstances that could affect your intended use of the land.

These checks are not interchangeable, and no single document or search should automatically be treated as conclusive of every issue.

## 4. What If the Property Is Being Sold by an Estate Developer?

The same principles apply when buying through an estate developer.

A well-designed estate, a functioning sales office, marketing materials and professional-looking documentation do not replace independent legal verification.

Before paying, investigate the developer's interest in the land, the authority under which the developer is selling, the relevant title documentation and the contractual terms governing the transaction.

You should also review the agreement for provisions dealing with payment, allocation, completion, delivery of title documents, additional charges, delays, termination and refunds.

If you are buying an off-plan property, the legal review should also consider the developer's obligations regarding completion and the remedies available if the agreed terms are not fulfilled.

## 5. What If You Have Already Paid?

If you have already paid for a property and are now concerned about its title, do not assume that your money is automatically lost or that a refund is guaranteed.

Your available options will depend on the agreement, the evidence of payment, the representations made to you, the nature of the seller's interest and the specific circumstances of the transaction.

Preserve the contract, receipts, transfer records, correspondence, advertisements and other relevant documents. Avoid making further payments until the outstanding concerns have been properly assessed.

A property lawyer can review the available evidence, identify the issues requiring investigation and advise you on the appropriate next steps.

Depending on the circumstances, these may include further verification, negotiations, a formal demand, steps to protect an existing interest or legal proceedings.

## The Rogad Chambers Takeaway

A Certificate of Occupancy and a Deed of Assignment can be important parts of a property's documentation, but neither should be treated as an automatic guarantee that a transaction is safe.

The real question is whether the seller has a valid and transferable interest, whether the property has been properly identified and investigated, and whether the applicable legal and procedural requirements have been satisfied.

> Before you commit your money, verify the transaction independently.

At Rogad Chambers, we assist clients with property due diligence, title review, conveyancing, title perfection and property-related disputes.

If you are considering buying land or property in Nigeria, or you have concerns about a transaction you have already entered into, our team can help you assess the documentation and determine the appropriate next steps.

> Need legal guidance before your next property transaction? Contact Rogad Chambers to discuss your property due-diligence and conveyancing needs.

This newsletter is intended for general informational purposes and does not constitute legal advice. Property transactions are fact-specific, and the appropriate verification and documentation requirements depend on the nature and location of the property and the applicable law.`
  },
  {
    date: "August 2026", title: "The Deal That Nearly Went Wrong", read: "4 min", practiceAreas: ["Corporate Advisory"],
    excerpt: "How one overlooked contract detail could have turned a promising business transaction into an expensive dispute.",
    image: "/images/insights/deal-that-nearly-went-wrong.webp", imageAlt: "A businessman pauses over a commercial agreement as his lawyer explains a point",
    body: `> A promising deal. A costly oversight. A lesson worth learning.

Imagine this.

A growing Nigerian business is about to enter into a major supply and installation agreement. The negotiations have gone smoothly. Both parties seem trustworthy, the price has been agreed, and the project promises significant commercial benefits.

The supplier sends over the contract.

The business owner gives it a quick read. The price looks right, the services appear to match what was discussed, and the delivery timeline seems reasonable.

There is only one problem: the contract does not clearly state what happens if the supplier fails to deliver the agreed result.

The document provides for a substantial upfront payment, but the delivery obligations are loosely worded. The technical specifications are unclear, the process for confirming satisfactory completion is missing, and the consequences of delay or non-performance are inadequately addressed.

The business owner is ready to sign.

Fortunately, the agreement is reviewed before the transaction proceeds.

That review raises questions that had not featured prominently during the negotiations. What exactly must be delivered? When is the supplier considered to have completed the job? What happens if the work does not meet the agreed requirements? Can the business terminate the agreement and recover its money if the supplier fails to perform?

These are not minor administrative details. They go to the heart of the transaction.

Before the contract is executed, the parties have an opportunity to clarify the scope of work, establish measurable delivery milestones, define acceptance procedures and address the consequences of non-performance.

A transaction that might otherwise have exposed the business to a difficult and expensive dispute now has a clearer contractual framework.

The important point is not that a dispute was inevitable. It is that the contract should not leave critical commercial questions unanswered.

**Note:** This is an illustrative scenario, not a report of a specific client matter.

## What Could Have Gone Wrong?

The real danger in a commercial transaction is not always an obviously unfair contract. Sometimes, it is an apparently reasonable agreement that fails to address what happens when expectations differ.

Three issues commonly deserve attention.

### 1. Unclear obligations

If the contract does not adequately specify the goods, services, quality standards or expected deliverables, the parties may later disagree about what was promised and whether the obligation has been fulfilled.

### 2. Poorly structured payments

A substantial advance payment without appropriate milestones or protections may expose a business to significant financial risk if delivery is delayed, incomplete or never happens.

### 3. Missing remedies

A contract should address the consequences of breach in a manner appropriate to the transaction. Depending on the circumstances, relevant provisions may cover notice, opportunities to remedy a breach, termination, refunds, liability and dispute resolution.

These provisions will not eliminate every commercial risk. They can, however, reduce uncertainty and provide a clearer framework for dealing with problems.

## The Lesson: Do Not Confuse Trust with Contractual Protection

Trust is valuable in business. It helps parties negotiate, cooperate and build long-term relationships.

But trust and contractual protection serve different purposes.

A good contract does not assume that one party intends to act dishonestly. It recognises that misunderstandings, operational failures, financial difficulties and changing circumstances can affect even a relationship that began in good faith.

The objective is not to make every transaction unnecessarily complicated. It is to identify the risks that matter, allocate responsibilities clearly and establish what happens if the deal does not proceed as planned.

Before signing a significant commercial agreement, businesses should ask:

- Are the obligations of each party clear and measurable?
- Are payment milestones tied to appropriate deliverables?
- What happens if delivery is delayed or performance is unsatisfactory?
- Are termination rights and relevant remedies adequately addressed?
- Does the dispute-resolution procedure suit the transaction?

If these questions cannot be answered confidently from the contract itself, further review may be necessary before the parties commit.

## A Final Word from Rogad Chambers

Some of the most expensive business disputes begin with agreements that everyone expected to work.

The price may be attractive. The opportunity may be promising. The other party may appear entirely dependable. Yet the terms governing performance, payment, termination and liability can ultimately determine each party's position when difficulties arise.

At Rogad Chambers, we advise businesses, entrepreneurs, investors and commercial clients on contract drafting, review, negotiation and dispute resolution. Our approach is to help clients understand the legal implications of their agreements before they become problems they must resolve.

> Before you sign your next deal, make sure the contract works not only when everything goes according to plan, but also when it does not.

Need a contract reviewed or negotiated?

Contact Rogad Chambers to discuss your commercial agreement and the protections appropriate to your transaction.

This newsletter is for general informational purposes only and does not constitute legal advice. The appropriate contractual protections depend on the facts of the transaction, the terms of the agreement and the applicable law.`
  }
];
export const blogPosts = [
  {
    date: "Nov 10, 2026", title: "The 10 Contract Clauses Every Business Owner Should Review Before Signing", read: "12 min", practiceAreas: ["Corporate Advisory"],
    excerpt: "The legal and commercial terms that can protect your business, reduce financial exposure and prevent costly disputes.",
    image: "/images/insights/contract-clauses-to-review.webp", imageAlt: "A business owner reads a tabbed agreement at his desk",
    body: `A contract can look straightforward when both parties are on good terms. The real test, however, is what happens when a payment is delayed, a supplier fails to deliver, a business relationship breaks down or one party decides to walk away from the deal.

For business owners, signing an agreement without fully understanding its terms can create financial and legal risks that could have been avoided through proper review and negotiation.

Whether you are entering into a supply agreement, engaging a service provider, partnering with another business, hiring a consultant or securing a commercial transaction, the terms of your contract matter. A well-drafted agreement does more than record what the parties have agreed to do; it establishes their respective obligations, allocates risks and provides a framework for resolving disagreements.

At Rogad Chambers, we recognise that sound legal documentation is an important part of protecting commercial interests and building sustainable businesses.

Here are 10 essential contract clauses every business owner should review before signing an agreement.

## 1. Scope of Work and Obligations

One of the most important parts of any commercial contract is a clear description of what each party is expected to do.

The scope-of-work clause should identify the goods to be supplied, services to be performed, deliverables to be provided and responsibilities each party must fulfil. Where relevant, it should also specify quality standards, milestones, delivery locations and acceptance criteria.

Vague expressions such as "provide professional services as required" or "deliver products within a reasonable period" can create disagreements when the parties have different expectations.

### What to check

- Are the goods, services or deliverables clearly described?
- Are each party's responsibilities expressly stated?
- Are deadlines, milestones and performance standards measurable?
- Is there a procedure for approving additional work or changes to the original scope?

**Why it matters:** If the parties disagree about whether an obligation has been fulfilled, the contract should provide a clear basis for determining what was actually promised.

## 2. Payment Terms and Financial Obligations

Payment disputes are among the practical problems that can disrupt business relationships. Your contract should therefore establish precisely how, when and under what conditions payment must be made.

A payment clause should address the contract price, payment schedule, invoicing requirements, applicable taxes, currency, payment method and any agreed deposits or instalments.

Where payment depends on the completion of a milestone or delivery of goods, the agreement should explain how that milestone or delivery will be verified.

### What to check

- Is the total price or method of calculating the price clear?
- When does payment become due?
- Are deposits, instalments and milestone payments properly documented?
- What happens if payment is delayed?
- Are any interest charges or late-payment fees clearly agreed and legally enforceable?

**Why it matters:** Clear payment provisions help manage cash flow, reduce uncertainty and provide documentary evidence if payment is withheld.

Business owners should be cautious about accepting vague promises of payment or relying entirely on informal assurances that are not reflected in the agreement.

## 3. Duration, Renewal and Termination

A contract should explain how long the relationship will last and the circumstances in which either party may bring it to an end.

Some agreements operate for a fixed period, while others continue until terminated in accordance with their terms. Where automatic renewal applies, the contract should specify the renewal period and any deadline for giving notice of non-renewal.

Termination provisions should also distinguish between ending a contract for convenience, ending it because of a breach and ending it because of events that make continued performance impracticable.

### What to check

- When does the agreement commence and expire?
- Does it renew automatically?
- How much notice is required to terminate?
- Can a party terminate for breach, insolvency or other specified events?
- Is the other party entitled to an opportunity to remedy a breach before termination?
- What happens to outstanding payments, work in progress and confidential information after termination?

**Why it matters:** A business should understand not only how to enter into a contractual relationship but also how to exit it without creating unnecessary liability.

A termination clause that is heavily one-sided or commercially impractical may leave your business locked into an unfavourable arrangement.

## 4. Representations, Warranties and Performance Standards

Representations, warranties and performance obligations can determine what happens when a party's statements prove inaccurate or the goods or services supplied fail to meet agreed requirements.

A representation generally concerns a statement of fact made in connection with the agreement. A warranty is a contractual assurance, while performance obligations establish what a party must actually deliver or achieve. Their legal effect depends on the wording and circumstances.

For example, a supplier may warrant that goods meet specified standards, while a service provider may undertake to meet agreed service levels.

### What to check

- Has the other party made important statements about its authority, capacity or ability to perform?
- Are product specifications or service standards clearly documented?
- Are inspection, testing and acceptance procedures provided?
- What remedies apply if the goods or services fail to meet the agreed requirements?
- Are warranties subject to reasonable and clearly stated limitations?

**Why it matters:** A business should not rely solely on sales presentations, verbal assurances or marketing claims when essential commitments can be incorporated into the contract.

Documenting the relevant assurances makes it easier to identify what the parties agreed and assess the available remedies if those commitments are not met.

## 5. Limitation of Liability and Indemnity

Liability provisions determine the extent to which a party may be responsible for losses arising from the contractual relationship. Indemnity clauses may require one party to compensate the other for specified losses, claims, liabilities or expenses.

These provisions deserve particular attention because they can substantially affect the financial consequences of a dispute.

For example, a service provider may seek to limit its total liability to the fees paid under the agreement. A customer may consider that limit inadequate if the provider's failure could expose the customer to substantially greater losses.

An indemnity may also be drafted broadly enough to cover risks that one party did not anticipate.

### What to check

- Is there a financial cap on liability?
- How is that cap calculated?
- Which categories of loss are excluded?
- What events trigger an indemnity?
- Does the indemnity cover third-party claims, legal costs or losses caused by the indemnified party's own conduct?
- Are any exclusions or limitations inappropriate for the transaction?

**Why it matters:** The contract price does not necessarily reflect the maximum financial exposure a party may face.

Business owners should assess liability provisions in light of the value of the transaction, the risks involved and the potential consequences of non-performance. Exclusions, caps and indemnities must also be considered in light of applicable law and the specific wording of the agreement.

## 6. Confidentiality and Protection of Business Information

Businesses routinely share sensitive information with suppliers, consultants, employees, investors, service providers and commercial partners.

This information may include pricing structures, customer lists, financial records, trade secrets, business strategies, technical information and internal processes.

A confidentiality clause establishes how protected information may be used, who may receive it and what obligations apply when the relationship ends.

### What to check

- What information qualifies as confidential?
- Is the information restricted to a defined business purpose?
- Can it be disclosed to employees, professional advisers or subcontractors who need access?
- Are there appropriate exceptions for information already lawfully known, independently developed or required to be disclosed by law?
- How must confidential information be returned, deleted or retained when the agreement ends?
- How long do confidentiality obligations continue?

**Why it matters:** Once sensitive business information is disclosed, it may be difficult to reverse the consequences of misuse.

A well-drafted clause helps establish clear expectations and may support legal remedies where a breach occurs. Depending on the information involved, separate non-disclosure agreements, intellectual property provisions and data-protection safeguards may also be necessary.

## 7. Intellectual Property Ownership and Usage Rights

Intellectual property issues frequently arise when businesses engage designers, software developers, consultants, marketing agencies, manufacturers and other service providers.

A contract may involve the creation or use of logos, software, website content, photographs, designs, reports, inventions, business processes or other intellectual property.

One party may assume that paying for a service automatically transfers ownership of everything created. That assumption is not always correct. Ownership and usage rights depend on the applicable law, the nature of the work and the contractual arrangements.

### What to check

- Who owns intellectual property created under the agreement?
- Is ownership transferred or is the customer granted a licence?
- When does any transfer of ownership take effect?
- Who owns materials, tools, software or other intellectual property that existed before the contract?
- Can the service provider reuse components or materials developed during the engagement?
- Are appropriate permissions, assignments and confidentiality obligations documented?

**Why it matters:** A business that pays for a website, brand identity or software solution may discover that it does not have all the rights it expected to receive.

The agreement should clearly distinguish between pre-existing intellectual property and newly created work, and specify the rights required for the business to use, modify, commercialise or transfer the deliverables.

## 8. Force Majeure and Events Beyond the Parties' Control

Unexpected events can interfere with contractual performance. Depending on the circumstances, these may include natural disasters, certain government restrictions, armed conflict or other events beyond a party's reasonable control.

A force majeure clause specifies which events may qualify, the consequences for affected obligations and the steps a party must take when performance is disrupted.

It should not be treated as a general permission to abandon an unfavourable contract.

### What to check

- Which events qualify under the clause?
- Must the affected party demonstrate that the event prevented or materially hindered performance?
- Is prompt written notice required?
- Must the affected party take reasonable steps to reduce the impact?
- Are affected obligations suspended, extended or subject to another remedy?
- How long must the disruption continue before termination becomes available?

**Why it matters:** A carefully drafted clause can provide a practical framework for managing exceptional disruptions while reducing uncertainty about each party's responsibilities.

The existence of an unexpected event does not automatically excuse non-performance. The contractual wording, the facts and applicable legal principles will determine its effect.

## 9. Dispute Resolution, Governing Law and Jurisdiction

Even carefully negotiated agreements can lead to disagreements. The contract should explain how those disputes will be handled.

A dispute-resolution clause may provide for negotiation, mediation, arbitration, court proceedings or a combination of these methods.

The governing-law clause identifies the legal system used to interpret the agreement. A jurisdiction clause identifies the courts that may hear disputes, while an arbitration clause establishes an agreement to resolve covered disputes through arbitration, subject to its terms and applicable law.

### What to check

- Which country's or state's law governs the agreement?
- Must the parties attempt negotiation or mediation before commencing formal proceedings?
- Is arbitration required, and if so, under what rules and at what seat?
- Which courts have jurisdiction where court proceedings are appropriate?
- Are interim or urgent remedies available where necessary?
- Is the procedure practical given the location of the parties, the value of the contract and the likely cost of a dispute?

**Why it matters:** An unclear or poorly designed dispute-resolution mechanism can increase the time, cost and complexity of resolving a commercial disagreement.

For businesses dealing with foreign suppliers, overseas investors or international customers, these provisions deserve particular attention because parties may be operating under different legal systems.

## 10. Notices, Amendments and Entire Agreement

Some contractual disputes arise not from the commercial deal itself but from uncertainty about how the agreement may be changed, how formal notices must be delivered or whether earlier discussions remain binding.

A notices clause identifies the approved methods and addresses for delivering formal communications. An amendment clause establishes how changes to the agreement must be made. An entire-agreement clause generally states that the written agreement represents the parties' agreement on the matters it covers, subject to applicable legal principles and the wording used.

### What to check

- Which addresses or email accounts may be used for formal notices?
- When is a notice considered received?
- Must amendments be in writing and signed by authorised representatives?
- Does the agreement address electronic signatures and electronic communications where relevant?
- Are earlier proposals, promises or representations properly reflected in the final document?
- Are schedules, annexures and referenced documents attached and consistent with the main agreement?

**Why it matters:** A business owner should not assume that a verbal conversation, informal message or later understanding has automatically changed the terms of a signed agreement.

Material changes should be documented through the procedure established by the contract, and the final agreement should be checked for missing schedules, inconsistencies and unauthorised commitments.

## Additional Considerations Before You Sign

The ten clauses above are important, but they are not an exhaustive list of the provisions that may be required in a commercial agreement.

Depending on the transaction, a business may also need provisions addressing:

- **Conditions precedent:** Requirements that must be satisfied before specified obligations take effect.
- **Insurance:** Required insurance policies, coverage limits and evidence of cover.
- **Assignment and subcontracting:** Whether a party may transfer contractual rights or delegate performance to another person.
- **Compliance with applicable law:** Relevant regulatory, licensing, anti-bribery, employment or data-protection obligations.
- **Severability and waiver:** The effect of an invalid provision and the consequences of a party not enforcing a right immediately.
- **Personal guarantees and security:** Whether an owner, director or another person is assuming personal liability or providing security for the obligations of a business.

Not every agreement needs every clause. The appropriate provisions depend on the nature, value, complexity and risks of the transaction.

## Conclusion: Review the Contract Before the Problem Arises

A contract should not be treated as a document to sign simply because the other party has prepared it or because the commercial opportunity appears attractive.

The most useful time to identify an unfavourable term is before you become bound by it. Once a dispute arises, your options may be more limited, and resolving the problem may cost significantly more than obtaining appropriate legal advice at the outset.

Before signing a commercial agreement, make sure you understand your obligations, the other party's commitments, the financial risks, the conditions for termination and the procedures available if something goes wrong.

At Rogad Chambers, we advise businesses on contract drafting, review, negotiation and commercial dispute resolution. Our approach is to help clients understand the legal implications of their agreements, identify material risks and make informed decisions that protect their commercial interests.

Whether you are entering into a new business relationship, negotiating a supplier agreement or reviewing an existing contract, appropriate legal guidance can help you approach the transaction with greater clarity.

## Need a contract reviewed before you sign?

Contact Rogad Chambers to discuss your commercial agreement and the legal support appropriate to your business.

Rogad Chambers — Practical Legal Solutions. Protected Commercial Interests.

**Disclaimer:** This article is provided for general information and educational purposes only. It does not constitute legal advice and should not be relied upon as a substitute for advice tailored to the facts of a particular transaction. The legal effect of a contractual provision depends on its wording, the circumstances and applicable law.`
  },
  {
    date: "Oct 13, 2026", title: "A Client Hasn’t Paid You? Start Here Before Going to Court", read: "12 min", practiceAreas: ["Litigation, Dispute Resolution & Arbitration"],
    excerpt: "A practical legal guide to recovering unpaid invoices and outstanding business debts in Nigeria.",
    image: "/images/insights/unpaid-invoices.webp", imageAlt: "A business owner at her laptop with overdue invoices on the desk",
    body: `In business, completing a job is only half the transaction. Getting paid is the other half.

You may have supplied goods, delivered a project, provided professional services or fulfilled every obligation under a commercial agreement, only for your client to delay payment, ignore your reminders or repeatedly promise to pay “next week.”

At first, you may be willing to exercise patience to preserve the business relationship. But as the days turn into weeks or months, the outstanding invoice begins to affect your cash flow, your ability to meet your own obligations and, ultimately, the financial stability of your business.

The natural reaction is to threaten legal action or immediately instruct a lawyer to commence proceedings. However, going to court is not always the first or most effective step in recovering an unpaid debt.

In many cases, a well-documented claim, a properly drafted demand letter and a clear understanding of your contractual rights can put you in a stronger position to recover your money without the cost and uncertainty of prolonged litigation.

At Rogad Chambers, we recognise that commercial disputes are not merely legal problems. They are also business problems that require a practical, strategic and commercially sensible response.

This guide explains the steps Nigerian businesses can take when a client fails to pay, the evidence they should preserve, and when it may be appropriate to escalate the matter to court.

## 1. Review Your Contract and Confirm What Is Actually Owed

Before taking action, return to the agreement governing the transaction.

Your contract, purchase order, engagement letter, invoice or other relevant documentation may establish the terms of payment, the amount payable, the circumstances under which payment becomes due and the consequences of non-payment.

Start by asking the following questions:

- What amount did the client agree to pay?
- When did the payment become due?
- Were there specific conditions that had to be satisfied before payment became due?
- Did the agreement permit instalment payments, retention of part of the fee or deductions?
- Were there procedures for notifying the client of a dispute or defective performance?
- Does the agreement specify how disputes should be resolved?

These questions matter because an unpaid invoice does not automatically establish that the entire amount claimed is immediately recoverable. The client's payment obligations, your performance and any genuine contractual dispute must be assessed in context.

For example, a consultant who completed an assignment and submitted an invoice may have a different claim from a contractor whose agreement makes payment conditional on certification of completed work.

**Practical tip:** Prepare a simple schedule showing the invoice number, amount due, invoice date, contractual payment deadline, amount received and outstanding balance. This gives you a clear starting point for recovery.

## 2. Gather and Preserve Your Evidence

One of the most common mistakes businesses make is assuming that because a transaction took place, proving it later will be straightforward.

Unfortunately, memories fade, messages get deleted, staff leave and business records become difficult to retrieve. When a payment dispute escalates, the strength of your evidence can significantly affect your ability to establish your claim.

Gather and preserve all relevant documents, including:

- **Contracts and agreements:** Signed contracts, engagement letters, purchase orders and agreed terms of service.
- **Invoices and payment records:** Original invoices, account statements, receipts and evidence of part-payments.
- **Proof of performance:** Delivery notes, signed acknowledgements, completion certificates, work reports or evidence that the agreed services were provided.
- **Correspondence:** Emails, letters and relevant WhatsApp messages concerning the transaction, delivery, payment promises or objections.
- **Acknowledgements of indebtedness:** Messages or letters in which the client admits owing money, proposes a repayment date or requests additional time.
- **Records of previous demands:** Copies of payment reminders and the client's responses.

Electronic communications can be relevant evidence in Nigerian proceedings, subject to applicable evidential requirements, including the rules governing electronic records under the Evidence Act 2011, as amended.

Preserve the original records wherever possible. Do not rely exclusively on cropped screenshots if the complete conversation, original files or other contextual records are available.

You should also retain evidence of any loss you intend to claim beyond the outstanding principal, such as contractual interest or other legally recoverable amounts. Such claims must have an appropriate legal or contractual basis.

## 3. Contact the Client and Establish Why Payment Has Not Been Made

Before assuming that the client deliberately intends to avoid payment, establish the reason for the delay.

There is a meaningful difference between a client who is experiencing a temporary cash-flow problem, a client who disputes the quality of your work and a client who is deliberately avoiding a legitimate obligation.

Your approach should reflect the circumstances.

Start with a clear written communication identifying the outstanding invoice, the amount due and the date payment was expected. Ask the client to confirm when payment will be made or, if the amount is disputed, to explain the specific basis of the dispute.

This approach serves two purposes. First, it gives the client a reasonable opportunity to resolve the issue. Second, it creates a contemporaneous record of your attempt to address the matter.

If the client raises a legitimate complaint, examine it against the contract and the evidence. You may need to correct a genuine performance issue, reconcile an account or negotiate a settlement.

However, repeated promises without payment should not lead to indefinite postponement. Where the client continues to avoid a clear obligation, you should consider moving from informal reminders to a formal recovery strategy.

## 4. Send a Formal Letter of Demand

When informal reminders fail, a formal letter of demand is often an appropriate next step.

A letter of demand communicates your client's outstanding obligation, the basis of the claim and the action required to resolve the matter. It also demonstrates that you have taken a structured approach to seeking payment before commencing proceedings.

A properly prepared demand letter will generally identify:

- The parties to the transaction.
- The contract, transaction or services giving rise to the debt.
- The relevant invoice numbers and outstanding amount.
- The payment deadline and any relevant contractual provisions.
- A clear demand for payment within a specified period.
- The proposed next steps if payment is not received or the dispute remains unresolved.

The letter should be firm, professional and factually accurate. It should avoid unnecessary threats, exaggerated claims or allegations of fraud that have not been properly established.

The appropriate deadline will depend on the contract, the nature of the debt and any applicable procedural requirements. Where a contract prescribes a particular notice period or method of service, that requirement should be considered before sending the demand.

A demand letter does not guarantee payment, and it is not a universal legal prerequisite to every debt-recovery action. Nevertheless, it can help clarify the dispute, encourage settlement and create a useful record of your efforts to resolve the matter.

### Why involve a lawyer?

A lawyer can assess the evidence, identify the appropriate legal basis for the claim, review any contractual notice requirements and prepare a demand that protects your position without unnecessarily escalating the dispute.

## 5. Consider Negotiation or a Structured Repayment Plan

Not every unpaid debt needs to become a lawsuit.

Where the client acknowledges the debt but cannot pay the full amount immediately, a structured repayment arrangement may be commercially preferable to litigation.

For example, rather than accepting another vague promise to pay, you could negotiate a written agreement specifying:

- The total amount acknowledged as outstanding.
- The amount and due date of each instalment.
- The method of payment.
- The consequences of defaulting on the arrangement.
- Any applicable interest or other agreed terms, subject to the law.
- How the arrangement affects your rights under the original agreement.

Whether to accept instalments should depend on the amount involved, the client's financial circumstances, the reliability of the proposed arrangement and the commercial value of recovering the debt promptly.

Be careful about accepting a repayment proposal without documenting it properly. Depending on its terms and the circumstances, a new arrangement may affect the parties' rights and available remedies.

If the client disputes only part of the invoice, consider whether the undisputed portion can be paid while the remaining issue is resolved.

The objective is not simply to obtain a promise. It is to secure a realistic, documented path to payment while protecting your legal position.

## 6. Assess Whether the Client Can Actually Pay

A legally valid claim and a successful recovery are not the same thing.

Before investing significant resources in litigation, consider whether the debtor has the financial capacity to satisfy a judgment if you obtain one.

Relevant considerations may include whether the client continues to operate, whether the business has identifiable assets or income, whether there are credible indications of insolvency and whether other creditors are pursuing the debtor.

This assessment should be lawful and proportionate. It must not involve unauthorised access to private information, harassment or other improper collection practices.

The amount owed also matters. For a relatively modest debt, the cost of extensive proceedings may be disproportionate. For a substantial commercial debt, a more detailed investigation and litigation strategy may be justified.

A lawyer can help you evaluate the available information, the likely costs of pursuing the claim and the practical options for enforcement.

> The key consideration is not merely whether you can sue. It is whether the proposed recovery strategy makes commercial sense.

## 7. Review the Dispute-Resolution Clause Before Commencing Proceedings

If your agreement contains a dispute-resolution clause, review it before deciding how to proceed.

Some contracts require the parties to attempt negotiation or mediation before litigation. Others provide for arbitration or specify a particular procedure for resolving disputes.

Ignoring an applicable contractual procedure may complicate the proceedings or create avoidable costs.

The appropriate forum may also depend on the nature of the transaction, the amount claimed, the parties involved, the applicable law and the relevant court's jurisdiction.

Where arbitration is required by an enforceable agreement, court proceedings may not be the appropriate first route for determining the underlying dispute, although the courts may still have relevant supporting or supervisory functions under applicable law.

A lawyer should assess these provisions alongside any applicable procedural rules before the claim is commenced.

## 8. When Should You Take the Matter to Court?

Court proceedings may become appropriate when the debt is properly due, the evidence supports the claim, reasonable attempts to obtain payment have failed and the debtor refuses to resolve the matter on acceptable terms.

Depending on the circumstances, litigation may be particularly relevant where:

- The client denies a clear contractual obligation without a credible basis.
- The debtor refuses to engage despite formal demands.
- The amount involved justifies the expected cost and time of proceedings.
- There is a need for an enforceable determination of the parties' rights.
- The available evidence supports a claim and the debtor appears capable of satisfying a judgment.

In Nigeria, the appropriate procedure depends on the relevant court, the nature of the claim and the applicable rules. Certain claims for liquidated monetary demands may qualify for summary or other expedited procedures where the relevant legal requirements are satisfied. These procedures are not automatically available for every unpaid invoice.

You should also be aware that a judgment does not, by itself, guarantee immediate payment. Enforcement may require additional steps, depending on the debtor's circumstances, the nature of the judgment and the applicable law.

For these reasons, the decision to litigate should follow an assessment of the merits of the claim, the available evidence, the likely costs, the relevant limitation period and the realistic prospects of recovery.

## 9. Do Not Allow an Unpaid Invoice to Remain Unaddressed Indefinitely

Time is an important consideration in debt recovery.

Under Nigerian law, limitation periods may restrict how long a claimant has to commence proceedings. The applicable period depends on factors including the nature of the claim, the relevant legislation and the circumstances of the transaction.

For example, a simple contract claim may be subject to a limitation period under the applicable state legislation. The precise position should be confirmed rather than assuming that the same period applies to every claim throughout Nigeria.

Do not assume that sending reminders or issuing a demand letter automatically stops time from running. Nor should you assume that an acknowledgement or part-payment necessarily has the same effect in every circumstance.

If an invoice has remained unpaid for a considerable period, obtain legal advice promptly to establish the applicable deadline and preserve your options.

A debt that appears straightforward can become more difficult to recover if action is delayed until the relevant limitation period has expired.

## 10. Prevent the Same Problem from Happening Again

Recovering an outstanding debt addresses the immediate problem. Improving your business processes can reduce the likelihood of similar disputes in the future.

Consider implementing the following measures:

Use written agreements. Clearly document the scope of work, deliverables, payment terms, milestones, deadlines and consequences of non-payment.

Set clear payment deadlines. Specify when invoices become due and how payments should be made. Where appropriate, consider deposits, milestone payments or advance payments.

Conduct proportionate client checks. For larger transactions or ongoing credit arrangements, assess the client's commercial reliability and payment history using lawful, relevant information.

Issue invoices promptly. Ensure that invoices contain accurate descriptions, amounts, payment instructions and due dates.

Maintain organised records. Keep contracts, invoices, delivery records, correspondence and payment confirmations in an accessible system.

Establish a follow-up process. Set internal reminders for approaching due dates, overdue invoices and the escalation of unresolved accounts.

Use appropriate dispute-resolution clauses. Have your agreements reviewed to ensure that they provide workable procedures for addressing disagreements and pursuing outstanding obligations.

These steps cannot eliminate every payment dispute. However, they can reduce uncertainty, strengthen your evidence and make it easier to respond when a client fails to pay.

## Conclusion: Protect Your Right to Payment Before the Dispute Escalates

An unpaid invoice should not automatically lead to litigation, but neither should it be allowed to remain unresolved indefinitely.

The sensible approach is to establish the contractual basis of the debt, preserve the relevant evidence, communicate clearly with the client, issue a formal demand where appropriate and evaluate the available recovery options.

Where negotiation fails, the next step may be legal proceedings. The appropriate strategy will depend on the evidence, the contractual terms, the amount involved, the debtor's circumstances and the applicable law.

Ultimately, recovering money owed to your business is not simply about taking action against a defaulting client. It is about protecting your cash flow, preserving your commercial interests and choosing a recovery strategy that is legally sound and commercially proportionate.

## Need Legal Assistance with an Unpaid Invoice or Business Debt?

At Rogad Chambers, we advise businesses and individuals on contractual obligations, unpaid invoices, debt recovery, commercial disputes and the enforcement of legal rights.

Whether you need assistance reviewing the documents supporting your claim, preparing a formal letter of demand, negotiating a repayment arrangement or assessing the prospects of litigation, our team can help you evaluate the available options and determine an appropriate course of action.

> Contact Rogad Chambers to discuss your unpaid invoice or outstanding business debt and the legal options available to you.

**Disclaimer:** This article is provided for general information and educational purposes only. It does not constitute legal advice and should not be relied upon as a substitute for advice based on the specific facts of a matter. Nigerian laws and court procedures may vary depending on the jurisdiction and the nature of the claim. Obtain professional legal advice before taking action.`
  },
  {
    date: "Sep 15, 2026", title: "Starting a Business with a Partner? Why You Need a Shareholders’ Agreement", read: "12 min", practiceAreas: ["Corporate Advisory"],
    excerpt: "Protecting your investment, defining responsibilities, and preventing disputes before they arise.",
    image: "/images/insights/shareholders-agreement.webp", imageAlt: "Two business partners discuss a shareholders’ agreement",
    body: `Starting a business with a partner can be an excellent way to combine capital, expertise, networks, and complementary skills. One partner may bring the funding, another the technical expertise, while a third contributes industry connections or operational experience. When these contributions work together, they can create a strong foundation for business growth.

However, a promising business relationship can quickly become complicated when the parties disagree about money, decision-making, responsibilities, ownership, or the future direction of the company.

What happens when one partner wants to sell their shares while the other wants to retain control? What if one shareholder contributes significantly more time and resources than the other? Who makes the final decision when the founders disagree on a major investment? And what happens if a shareholder wants to leave the business?

These are not questions that should be left until a dispute arises.

For businesses operating in Nigeria, a shareholders’ agreement is an important legal instrument for establishing clear expectations among shareholders, protecting their interests, and providing a framework for managing disagreements. It helps the parties address difficult questions at the beginning of their relationship, when their interests are more likely to be aligned.

At Rogad Chambers, we recognise that sound legal structuring is not simply about meeting incorporation requirements. It is also about helping businesses establish arrangements that support stability, accountability, and sustainable growth.

## What Is a Shareholders’ Agreement?

A shareholders’ agreement is a contract between some or all of the shareholders of a company, and sometimes the company itself, that regulates their relationship and establishes agreed rules for matters such as ownership, decision-making, share transfers, management rights, and dispute resolution.

While a company’s incorporation documents establish its legal existence and its constitutional framework, a shareholders’ agreement can provide more detailed arrangements tailored to the commercial relationship between its owners.

In Nigeria, the Companies and Allied Matters Act 2020 (CAMA) provides the principal statutory framework for company formation and governance. A shareholders’ agreement should be drafted with due regard to CAMA, the company’s articles of association, and any other applicable legal requirements.

Importantly, a shareholders’ agreement is not a substitute for proper incorporation or appropriate constitutional documents. The documents should be reviewed together to ensure that they work consistently and that the intended arrangements are legally effective.

## Why Do You Need a Shareholders’ Agreement?

### 1. To Clearly Define Ownership and Financial Contributions

One of the most common sources of disagreement between business partners is uncertainty about who owns what and what each person is expected to contribute.

For example, two founders may agree to own a company equally, but one contributes ₦20 million in capital while the other contributes business expertise, intellectual property, or operational services. Unless the arrangement is properly documented, questions may arise about whether the contributions justify equal ownership, whether additional funding is required, and what happens if one founder fails to meet their commitments.

A shareholders’ agreement can clarify:

- Each shareholder’s ownership percentage and relevant shareholding rights.
- The initial capital contributions and any agreed future funding obligations.
- Whether additional financing will come from shareholders, loans, or external investors.
- The consequences of failing to meet agreed financial commitments, where legally permissible.
- The treatment of any agreed non-cash contributions.

These provisions help ensure that all parties understand the financial basis of their relationship before the business begins to encounter commercial pressure.

### 2. To Establish Decision-Making Powers and Management Responsibilities

A business can suffer when its owners have different expectations about who has the authority to make decisions.

One founder may assume that they can independently enter into major contracts, employ senior staff, borrow money, or commit company funds. Another may believe that such decisions require the consent of all shareholders.

A shareholders’ agreement can establish which matters may be handled by management or the board of directors and which require shareholder approval. It can also specify matters requiring special approval or the consent of particular shareholders, subject to applicable law and the company’s constitutional documents.

These matters may include:

- Taking on significant borrowing or granting substantial security.
- Issuing additional shares or changing the company’s capital structure.
- Selling significant business assets.
- Entering into major transactions outside the ordinary course of business.
- Appointing or removing key management personnel.
- Approving mergers, acquisitions, or other fundamental changes to the business.

Clear decision-making rules reduce uncertainty and help prevent either shareholder from assuming powers that were never agreed upon.

### 3. To Prevent and Manage Disputes Between Business Partners

Disagreements are not necessarily a sign that a business partnership has failed. They may arise because shareholders have different risk appetites, financial priorities, management styles, or long-term objectives.

The real problem arises when there is no agreed process for resolving those disagreements.

Consider a company owned equally by two founders. One wants to reinvest all profits into expansion, while the other wants to distribute dividends. If neither shareholder has a casting vote and the matter requires agreement, the company may become deadlocked.

A well-drafted shareholders’ agreement can provide a structured process for addressing such situations. Depending on the business and the parties’ preferences, this may include good-faith negotiations, escalation to designated representatives, mediation, arbitration where appropriate, or agreed mechanisms for resolving a persistent deadlock.

The agreement should also clarify which matters are subject to these procedures and how the company is expected to operate while a dispute remains unresolved.

The objective is not to eliminate every disagreement. It is to prevent disagreements from unnecessarily paralysing the business or escalating into expensive litigation.

### 4. To Regulate the Transfer and Sale of Shares

A shareholder may eventually decide to leave the business, retire, pursue another opportunity, or sell their investment. Without clear arrangements, the remaining shareholders may find themselves dealing with an unfamiliar third party who acquires an interest in the company.

A shareholders’ agreement can establish rules governing how shares may be transferred, subject to applicable law and the company’s constitutional documents.

These arrangements may include:

**Pre-emption rights:** Existing shareholders may have the right to purchase shares before they are offered to an outside buyer, in accordance with the agreed terms.

**Right of first refusal:** A shareholder intending to sell may be required to offer the shares to specified existing shareholders before completing a proposed sale to another party.

**Tag-along rights:** Minority shareholders may be entitled to participate in a qualifying sale by a majority shareholder on specified terms.

**Drag-along rights:** In an agreed qualifying transaction, shareholders meeting specified conditions may be able to require other shareholders to participate in the sale, subject to the contractual provisions and applicable law.

The agreement should define the triggering conditions, valuation arrangements, notice periods, and applicable procedures. These provisions can help protect the parties’ interests while making future ownership changes more predictable.

### 5. To Protect Minority Shareholders

In a company where one shareholder owns a majority of the shares, smaller shareholders may be concerned about losing influence over important decisions.

For instance, a majority shareholder may seek to approve a transaction that materially affects the company, alter the business strategy, or pursue a restructuring that the minority shareholder opposes.

A shareholders’ agreement can establish protections such as reserved matters requiring specified levels of approval, information rights, agreed participation in particular decisions, and restrictions on certain transactions.

Such provisions must be carefully drafted. They should not be assumed to override statutory requirements, directors’ duties, or the rights conferred by applicable law.

For investors contributing capital without participating in daily operations, these protections can be particularly important because they help define how their interests will be monitored and safeguarded.

### 6. To Address Shareholder Exit, Incapacity, or Death

A business relationship may change because of circumstances that neither party anticipated when the company was established.

A shareholder may become incapacitated, die, relocate, retire, or simply wish to pursue a different career. If the agreement does not address these situations, the remaining shareholders and the affected shareholder’s estate may face uncertainty about the future of the investment.

A shareholders’ agreement can establish appropriate procedures for events such as these, including:

- How a proposed exit will be initiated and documented.
- Whether existing shareholders have rights to purchase the departing shareholder’s shares.
- How the shares will be valued.
- How payment will be structured and completed.
- What happens when a shareholder dies or becomes permanently incapacitated, subject to applicable succession law.
- How the parties will manage an orderly transition.

These provisions should reflect the company’s financial capacity and the parties’ commercial objectives. A buyout mechanism that appears reasonable on paper may create serious cash-flow difficulties if the company cannot fund it when triggered.

### 7. To Protect Confidential Information and Business Interests

Business partners may have access to sensitive information, including customer records, pricing models, supplier arrangements, trade secrets, strategic plans, and proprietary technology.

A shareholder who exits the business may retain knowledge or information that could be misused or disclosed to competitors.

A shareholders’ agreement can establish confidentiality obligations, restrictions on the use or disclosure of protected information, and appropriate arrangements for handling company records after a shareholder leaves.

Where necessary, the parties may also consider carefully tailored provisions concerning intellectual property ownership, conflicts of interest, and competing activities. These provisions must be assessed against the relevant legal requirements and should not be drafted so broadly that they become unenforceable or commercially unreasonable.

Where founders are also employees, directors, consultants, or service providers, separate agreements may be needed to address their respective roles and obligations.

## Is a Shareholders’ Agreement the Same as a Company’s Articles of Association?

No. Although the documents may address overlapping issues, they serve different purposes.

A company’s articles of association form part of its constitutional framework and regulate matters concerning the company and its governance. A shareholders’ agreement is a contractual arrangement that sets out agreed rights and obligations among its parties.

The articles may address matters such as share transfers, directors, meetings, and voting procedures. A shareholders’ agreement may supplement these provisions by addressing specific commercial arrangements between the shareholders.

The critical consideration is consistency. If the shareholders’ agreement and the articles of association contain conflicting provisions, questions may arise about their effect and enforceability. The legal position depends on the specific terms, applicable law, and circumstances.

For this reason, both documents should be reviewed together. Where necessary, the company’s articles should be amended through the appropriate procedure so that the intended governance arrangements are properly reflected.

## When Should You Prepare a Shareholders’ Agreement?

The best time to prepare a shareholders’ agreement is generally when the founders are establishing the company or before they make a significant investment or enter into a material ownership arrangement.

At this stage, the parties can discuss their expectations and agree on how the business should operate before financial pressure, personal disagreements, or competing interests make negotiations more difficult.

A shareholders’ agreement may also be appropriate for an existing company when:

- A new investor joins the business.
- The company introduces a new shareholder or restructures its ownership.
- The founders’ respective responsibilities change.
- The company begins seeking external investment.
- Existing disagreements reveal gaps in the company’s governance arrangements.
- The shareholders want to establish clearer exit or dispute-resolution procedures.

Existing shareholders should obtain legal advice before introducing or changing an agreement, particularly where the proposed terms affect other shareholders, existing contractual rights, or the company’s constitutional documents.

## What Should a Well-Drafted Shareholders’ Agreement Contain?

There is no single template that is suitable for every company. The agreement should reflect the company’s ownership structure, commercial objectives, funding arrangements, and anticipated risks.

Depending on the circumstances, it should address the following:

- **Parties and ownership:** The shareholders covered by the agreement and their respective shareholdings.
- **Capital contributions and funding:** Initial contributions, future financing arrangements, and the consequences of agreed funding commitments not being met.
- **Governance and decision-making:** Board representation, voting thresholds, reserved matters, and management authority.
- **Dividends and distributions:** The principles governing profit distribution, subject to applicable law and the company’s financial position.
- **Share transfers:** Restrictions, pre-emption rights, permitted transfers, and procedures for a proposed sale.
- **Minority protections:** Information rights and agreed protections for shareholders who do not control the company.
- **Deadlock and dispute resolution:** Procedures for resolving disagreements and addressing situations where essential decisions cannot be made.
- **Exit and valuation:** Agreed exit mechanisms, valuation procedures, payment arrangements, and other relevant conditions.
- **Confidentiality and intellectual property:** Protection of sensitive information and clear arrangements concerning intellectual property.
- **Duration, amendments, and enforcement:** How the agreement may be changed, how it interacts with other documents, and how disputes concerning its terms will be addressed.

The agreement should be drafted with the company's specific needs in mind. Simply downloading a generic template may leave important gaps or introduce provisions that are inappropriate for the business.

## Common Mistakes to Avoid When Drafting a Shareholders’ Agreement

Even where founders recognise the importance of a shareholders’ agreement, poor drafting can undermine its usefulness.

**Relying on verbal promises:** Friendly relationships and informal assurances are not a reliable substitute for clear written terms.

**Assuming equal ownership means equal decision-making in every situation:** Ownership percentages, voting rights, board representation, and approval thresholds should be considered separately.

**Ignoring deadlock:** A 50/50 ownership structure may create difficulties if the founders cannot agree on a critical decision and have no workable mechanism for resolving the impasse.

**Leaving share valuation undefined:** An exit provision may become contentious if the parties have not agreed on how the value of the shares will be determined.

**Failing to coordinate the agreement with the articles of association:** Inconsistent documents can create uncertainty and complicate enforcement.

**Using overly broad restrictions:** Confidentiality, non-compete, transfer, and other restrictive provisions should be carefully tailored to the legitimate interests being protected and applicable law.

**Failing to review the agreement as the business grows:** Changes in ownership, investment, management, or commercial strategy may require the parties to revisit their existing arrangements.

## Conclusion: Protect the Business Relationship Before Problems Arise

Starting a business with a partner requires more than a shared vision and a promising commercial opportunity. It requires clarity about ownership, responsibility, decision-making, financial contributions, and what happens when circumstances change.

A shareholders’ agreement helps translate those expectations into a structured legal arrangement. It can reduce uncertainty, protect legitimate interests, and establish a framework for managing disagreements before they threaten the company’s operations or value.

The agreement cannot guarantee that disputes will never arise, nor can it replace sound management or compliance with applicable law. Its value lies in helping the shareholders anticipate foreseeable problems and agree on practical ways to address them.

Whether you are establishing a new company, bringing in an investor, or reviewing the governance arrangements of an existing business, obtaining appropriate legal advice at the right time can help you make more informed decisions about the future of your enterprise.

## Need Help Drafting or Reviewing a Shareholders’ Agreement?

At Rogad Chambers, we advise business owners, founders, investors, and companies on corporate structuring, shareholders’ agreements, commercial contracts, corporate governance, and dispute prevention.

We work with clients to develop legal arrangements that reflect their commercial objectives, clarify the rights and obligations of the parties, and support the long-term interests of the business.

Contact Rogad Chambers to discuss drafting a shareholders’ agreement, reviewing your existing arrangements, or addressing a corporate governance concern.

**Disclaimer:** This article is provided for general informational purposes and does not constitute legal advice. The appropriate terms and enforceability of a shareholders’ agreement depend on the company’s circumstances, its constitutional documents, and applicable Nigerian law. Obtain professional advice before entering into or amending an agreement.`
  },
  {
    date: "Aug 18, 2026", title: "Buying Land in Nigeria: 12 Legal Checks Every Buyer Should Complete Before Paying", read: "16 min", practiceAreas: ["Energy, Infrastructure & Real Estate"],
    excerpt: "A practical guide to verifying land ownership, title documents, survey plans, government acquisition status and other legal risks before committing your money.",
    image: "/images/insights/buying-land-legal-checks.webp", imageAlt: "A surveyor records boundary beacons on a plot of land",
    body: `Buying land is one of the most significant financial decisions an individual, family, entrepreneur or investor can make. Whether you are purchasing a residential plot, acquiring land for commercial development or investing in property for future appreciation, the transaction requires more than finding a suitable location and agreeing on a price.

In Nigeria, a land transaction can expose a buyer to serious legal and financial risks if ownership is not properly verified, documents are unreliable, boundaries are disputed or the property is affected by government acquisition, competing claims or restrictions on its use.

A seller may present a Certificate of Occupancy (C of O), a Deed of Assignment, a survey plan or other documents and confidently assure you that everything is in order. An attractive estate, an impressive office or a persuasive real estate agent does not, however, eliminate the need for independent verification.

> The most important question is not simply whether the seller has documents. It is whether the seller has a valid interest in the land that can lawfully be transferred to you, and whether the particular parcel is suitable for your intended purchase.

At Rogad Chambers, we recognise that proper legal due diligence is an important part of protecting property investments. Before committing your money, consider these 12 legal checks.

## 1. Verify the Identity of the Seller and Their Authority to Sell

The first step is to establish who is selling the land and whether that person has the legal authority to transfer the interest being offered.

Do not assume that the person negotiating the sale is the actual owner simply because they possess the land, have access to the estate or have been introduced by a trusted individual.

Request appropriate identification and examine the documents through which the seller claims ownership. Where an agent or representative is acting for the owner, verify the scope and validity of their authority, including any relevant Power of Attorney.

Where the seller is a company, the transaction may require additional checks into the company's status, ownership, authority to sell and the approval of the appropriate officers or governing body.

Where a family, community, estate or other collective entity owns the land, identify the persons legally entitled to represent it and establish who must participate in or approve the transaction.

**Why this matters:** Paying someone who lacks the authority to sell can leave you facing competing claims even after you have parted with your money.

## 2. Establish the Root of Title

A seller's document should not be examined in isolation. You must understand how the seller acquired the land and whether the chain of ownership supports the interest being transferred.

This investigation is commonly described as an examination of the root of title.

Depending on the circumstances, the relevant documents may include an earlier conveyance, a Deed of Assignment, a Certificate of Occupancy, a government allocation, a Deed of Gift, a judgment, a Gazette or documents establishing inheritance through an estate.

The appropriate documents depend on the property's history and the nature of the interest claimed.

For example, if the seller claims to have purchased the land from another person, your lawyer should investigate the earlier transaction and determine whether the predecessor had a valid interest to transfer. If ownership arose through inheritance, the relevant succession documents and authority of the persons dealing with the property should be examined.

A Deed of Assignment showing a recent transaction does not automatically resolve defects in an earlier owner's title.

**Why this matters:** A seller cannot ordinarily transfer a better interest than the one they legally hold. An apparently complete set of recent documents may still be affected by a fundamental defect in the chain of title.

## 3. Conduct an Independent Search at the Relevant Land Registry

Document verification should not end with inspecting the papers provided by the seller.

Where applicable records are available, your lawyer should conduct an independent search at the relevant Land Registry or other appropriate government office to investigate the property's registered title and any recorded interests affecting it.

Depending on the location and the nature of the title, the search may help establish:

- Whether the relevant title or instrument appears in the official records.
- Whether the seller's claimed interest corresponds with the registered information.
- Whether a previous transfer or other transaction has been recorded.
- Whether there are registered mortgages, charges, leases, restrictions or other interests affecting the property.
- Whether further documents or official confirmations are required before completion.

In Lagos State, the Lagos State Land Administration Portal provides access to land administration services, including property searches and other land-related information.

However, a registry search should form part of a wider investigation. It does not necessarily disclose every unregistered interest, disputed claim, unauthorised occupation or defect in a transaction.

**Why this matters:** A document may appear genuine while relating to a different parcel, an earlier transaction or an interest that does not support the seller's present claim.

## 4. Obtain an Independent Survey and Verify the Survey Plan

A survey plan is important because it helps identify the land being purchased by reference to its location, boundaries, dimensions and coordinates.

However, merely receiving a survey plan from the seller does not establish that the land is correctly identified or that the plan reflects the actual parcel on the ground.

Engage an appropriately qualified surveyor to examine the plan, verify the relevant coordinates and confirm that the land shown in the documents corresponds with the physical property being offered.

Where required, the surveyor should arrange for official charting or other appropriate verification through the relevant Office of the Surveyor-General.

This process can help identify discrepancies involving boundaries, overlapping claims, incorrect coordinates or the relationship between the parcel and recorded land information.

It is particularly important where the land forms part of a larger estate, has been subdivided from a larger parcel or is being sold through a layout plan.

**Why this matters:** You need to know that you are purchasing the specific land represented in the transaction, not a different parcel, an overlapping interest or an inaccurately described piece of land.

## 5. Confirm Whether the Land Is Under Government Acquisition or Subject to Restrictions

One of the most consequential checks in a Nigerian land transaction is establishing the property's official land status.

A plot may be physically occupied, marked with beacons or advertised for sale even though it is affected by government acquisition, a public infrastructure reservation or another restriction.

Depending on the location, relevant issues may include committed government acquisition, road alignments, drainage channels, public infrastructure projects, restricted development areas and the legal status of land said to have been excised or released from government acquisition.

Where the seller claims that a parcel has been excised or that its title has been regularised, do not rely solely on verbal assurances, an estate brochure or a document that has not been independently verified.

Your lawyer and surveyor should investigate the relevant government records and determine whether the specific land falls within the area covered by the documents presented.

Where acquisition or regularisation is involved, obtain appropriate confirmation of the land's status rather than assuming that an application, promise or pending process guarantees a favourable outcome.

**Why this matters:** A government restriction or defective claim concerning the land's status can undermine the investment or limit the buyer's ability to develop it as intended.

## 6. Inspect the Land Physically and Confirm Its Boundaries

Legal documents and official searches cannot replace a proper physical inspection.

Visit the property and confirm that its location corresponds with the survey plan and other transaction documents. Where practical, have your surveyor identify the relevant beacons and boundaries.

Look for signs of encroachment, neighbouring structures extending into the parcel, disputed access routes, occupied sections or inconsistencies between the documents and the actual site.

Also examine the property's accessibility, topography, drainage and surrounding development. Ask relevant questions about flooding, erosion, access disputes and any known restrictions that could affect its intended use.

Where possible, seek independent information from people familiar with the location. Neighbours and community members may identify longstanding possession disputes or competing claims that would not be apparent from the seller's documents alone.

An inspection should be conducted carefully and lawfully, without trespassing or provoking a confrontation with occupants.

**Why this matters:** A legally documented interest can still become commercially problematic if the physical boundaries, access or condition of the land differ from what you expected.

## 7. Investigate Who Occupies or Claims an Interest in the Land

Before completing a purchase, determine whether anyone is in possession of the land and the basis of that possession.

The property may be occupied by a tenant, family member, caretaker, previous purchaser, neighbouring landowner or another person claiming rights over the parcel.

Ask the seller to explain any occupation or third-party interest and investigate the explanation independently.

Where a building or developed property is being sold, review relevant tenancy arrangements and determine whether the purchase includes vacant possession or is subject to existing occupiers' rights.

For undeveloped land, investigate whether the parcel has previously been sold, allocated, leased or otherwise committed to someone else.

Do not assume that the absence of a building means that the land is free from competing claims.

Equally, the presence of a person on the land does not, by itself, determine that person's legal rights. The underlying facts and documents must be assessed.

**Why this matters:** Taking possession of land after paying for it can be difficult where another person occupies it or asserts a competing interest.

## 8. Apply Additional Scrutiny to Family, Communal and Inherited Land

Land transactions involving families, communities and inherited property require particular care because ownership and authority may depend on customary law, succession arrangements and the circumstances through which the land was acquired.

A family member who presents themselves as the owner may not have the authority to sell family land independently.

Your lawyer must identify the proper persons entitled to act for the landowning family or community and determine which consents, approvals, signatures or other steps are legally required for the proposed transaction.

For inherited property, establish the identity of the deceased owner, the persons entitled to deal with the estate and whether the necessary probate or administration documents are in place. Where there is a will, the applicable testamentary and administration requirements must be examined.

Where family or community representatives have already signed earlier agreements or receipts concerning the land, those transactions should also be investigated.

The precise requirements depend on the applicable customary law, the property's history, the parties involved and the nature of the interest being transferred. A seller's family title or community affiliation is not a substitute for establishing the proper authority to transact.

**Why this matters:** A sale conducted without the necessary authority or participation of the relevant persons may be challenged, even where money has been paid and documents have been signed.

## 9. Check for Litigation, Mortgages, Previous Sales and Other Encumbrances

Before paying, investigate whether the land is subject to a dispute, a mortgage, a lease, a court order or another interest that could affect the transaction.

Your lawyer should consider the available registry records, relevant court records and the property's transaction history. Further investigation may be necessary where the seller's title arose through litigation, inheritance or a series of earlier transfers.

Questions worth addressing include:

- Has the land been sold or allocated to another purchaser?
- Is there a pending ownership or boundary dispute?
- Has the land been mortgaged or charged as security for a debt?
- Is it subject to an existing lease or other third-party interest?
- Is there a court order or other restriction affecting the seller's ability to transfer the interest?

The scope of these investigations will depend on the circumstances. No single search necessarily reveals every possible dispute or unregistered interest.

If a significant issue is discovered, the transaction should not proceed on the assumption that it can be resolved after payment. Obtain a legal assessment of the risk and determine whether it can be satisfactorily addressed before completion.

**Why this matters:** You do not want to discover after purchase that another person has a competing claim, a secured interest or an enforceable right affecting the land.

## 10. Confirm the Permitted Use, Planning Requirements and Environmental Risks

Not every parcel of land is suitable for every intended purpose.

Before purchasing land for a residential estate, commercial development, industrial project, agricultural activity or another specialised use, investigate whether the proposed use is legally permissible.

Where the transaction involves an existing building or a proposed development, verify the applicable planning requirements and any necessary approvals. In Lagos State, this may include relevant physical planning and building control requirements.

Also investigate any restrictions relating to roads, drainage, setbacks, easements, utility corridors or other public infrastructure.

Environmental and physical considerations matter as well. Depending on the location, flooding, erosion, poor drainage, unstable ground or access constraints may materially affect the property's value and usability.

If you are buying for development, consider whether the parcel's characteristics and planning status support the project you have in mind. Obtain appropriate professional advice where engineering, environmental or planning questions arise.

**Why this matters:** A parcel may be legally transferable but unsuitable for the project you intend to undertake, or its development may require approvals you have not accounted for.

## 11. Ensure That the Contract of Sale Protects Your Interests

Once the preliminary investigations are satisfactory, the next step is to document the transaction properly.

A contract of sale should accurately identify the parties and property, state the agreed purchase price, establish the payment arrangements and specify the obligations each party must fulfil.

Depending on the transaction, the agreement should address:

- A sufficiently precise description of the land and its boundaries.
- The seller's representations concerning the title and authority to sell.
- The purchase price, payment milestones and conditions for releasing funds.
- The documents the seller must provide at completion.
- The handling of identified title defects and outstanding approvals.
- The arrangements for delivering possession.
- The consequences of a party's failure to perform.
- Any indemnities, refund provisions or other agreed protections.
- The steps required to complete and perfect the transaction.

Your lawyer should ensure that the contract reflects the outcome of the due-diligence process rather than relying on standard terms that may not address the specific risks of the property.

Keep clear records of payments, receipts, correspondence, signed agreements and documents exchanged during the transaction. Avoid making substantial payments based solely on oral assurances.

**Why this matters:** Proper documentation helps establish what was agreed, what the seller promised and what remedies may be available if the transaction goes wrong.

## 12. Plan for Completion, Consent, Stamping and Registration

Paying the purchase price and signing an agreement may not be the end of the legal process.

Depending on the nature of the title, the transaction and the applicable requirements, further steps may be necessary to complete the transfer and perfect the buyer's interest.

The Land Use Act is particularly relevant. Sections 21 and 22 address the alienation of customary and statutory rights of occupancy, respectively, including applicable consent or approval requirements. Section 26 also addresses transactions and instruments that are contrary to the Act.

The precise requirements must be assessed in the context of the relevant title and transaction. Do not assume that the same approval process applies to every parcel of land in every circumstance.

Your lawyer should identify the applicable steps, which may include obtaining the necessary consent or approval, paying applicable stamp duties, registering the relevant instrument and updating the appropriate records.

You should also establish who is responsible for each step, the documents required, the associated costs and the intended completion timetable.

Budget for these costs from the outset. An apparently affordable property can become more expensive when the costs of completing the transaction and perfecting the title are considered.

**Why this matters:** Proper completion and perfection help ensure that your transaction is documented and processed in accordance with the requirements applicable to the interest acquired.

## What Documents Should You Request Before Buying Land in Nigeria?

The documents required will depend on the property's history, the nature of the seller's interest and the proposed transaction. Nevertheless, a preliminary checklist may include:

- The seller's identification and evidence of authority to sell.
- The relevant title documents and available evidence of the root of title.
- The survey plan and information needed to verify the parcel.
- Relevant official search results and confirmations of land status.
- Earlier conveyance documents, where necessary to establish the chain of title.
- Applicable consent, approval, allocation or regularisation documents.
- Relevant family, probate or administration documents, where applicable.
- Any documents concerning mortgages, leases, previous sales or other interests affecting the land.
- The proposed contract of sale and documents to be executed at completion.

This is not an exhaustive list, nor should every buyer expect every document to apply to every transaction. The correct documentation must be determined after examining the facts and title history of the particular property.

## Can a Certificate of Occupancy Guarantee That Land Is Safe to Buy?

No. A Certificate of Occupancy should not be treated as a substitute for a comprehensive investigation of the property.

Although a C of O may be an important part of the title documentation, the buyer still needs to examine the underlying interest, verify the relevant records and investigate issues such as the precise identity of the parcel, competing claims, encumbrances and the seller's authority to transfer the interest.

The same principle applies to a Deed of Assignment, a survey plan, a Gazette or other documents presented in support of a transaction.

> The legal significance of each document depends on what it establishes, whether it is genuine and applicable to the property, and how it fits into the wider title history.

A document should therefore be verified independently rather than accepted simply because it looks official.

## Why You Should Engage a Property Lawyer Before Making Payment

Land transactions involve questions of ownership, documentation, land administration, contractual obligations and compliance with applicable legal requirements. These issues cannot always be resolved by inspecting the land or asking the seller to provide additional papers.

A property lawyer can investigate the title, review the documents, identify potential defects, coordinate the necessary searches with relevant professionals, advise on the proposed terms and explain the legal steps required to complete the transaction.

Independent representation is particularly important where the property is being purchased from a developer, a family or community, an estate, a company or a seller acting through a representative.

The objective is not simply to prepare documents after the commercial terms have been agreed. It is to identify and assess material risks before you commit your money and to structure the transaction around the findings.

While no due-diligence process can eliminate every conceivable risk, a properly conducted investigation can help you make a more informed decision and avoid many preventable problems.

## Protect Your Property Investment with Rogad Chambers

Buying land should be an investment decision supported by evidence, proper documentation and an understanding of the risks involved.

Before making payment, take the time to establish who owns the land, whether the seller can lawfully transfer the relevant interest, whether the documents withstand independent verification and whether the property is suitable for your intended purpose.

If an important question remains unanswered, resolve it before proceeding rather than assuming it can be handled after the transaction.

> Rogad Chambers provides legal support for property transactions, including title due diligence, review of property documents, conveyancing, title perfection and property-related dispute resolution.

Whether you are purchasing land for personal use, acquiring property for commercial purposes or investing in Nigerian real estate from abroad, obtaining appropriate legal advice before committing your funds can help you make better-informed decisions.

> Planning to purchase land in Nigeria? Contact Rogad Chambers to discuss your proposed transaction and the legal due diligence required to protect your interests.

**Legal note:** This article provides general information and is not a substitute for legal advice on a particular property. Land administration, customary rights, planning requirements and conveyancing procedures may differ by state and by the circumstances of the transaction. Obtain a property-specific legal assessment before proceeding.`
  },
  {
    date: "Jul 14, 2026", title: "Buying Nigerian Property from Abroad: A Diaspora Due Diligence Checklist", read: "15 min", practiceAreas: ["Energy, Infrastructure & Real Estate"],
    excerpt: "How Nigerians in the diaspora and foreign-based investors can verify property ownership, identify red flags, and protect their investments before transferring funds.",
    image: "/images/insights/diaspora-property-due-diligence.webp", imageAlt: "A buyer abroad inspects a house by video call, with a due diligence checklist beside the laptop",
    body: `## Introduction: Buying Property in Nigeria from Overseas Requires More Than Trust

For many Nigerians living abroad, investing in property back home is an important financial milestone. It may represent a plan to build a family home, acquire land for future development, generate rental income, or establish a long-term investment in Nigeria.

However, purchasing property from thousands of miles away presents challenges that buyers living in Nigeria may be better positioned to manage. You may be unable to inspect the property personally, verify the seller's claims, visit relevant government offices, or monitor every stage of the transaction. As a result, you may have to rely on family members, friends, estate agents, property developers, or other representatives to act on your behalf.

While these arrangements can be convenient, trust alone is not a substitute for independent legal verification.

A property may be advertised as genuine, a seller may present documents that appear authentic, and a development may look impressive in photographs or videos. None of these, standing alone, establishes that the seller has the legal authority to transfer the interest being offered or that the property is free from competing claims and other legal complications.

For diaspora investors, the consequences of inadequate due diligence can be particularly costly. Recovering money from an overseas property transaction may involve complex correspondence, legal proceedings, additional expenses, and difficulties gathering evidence from another country.

At Rogad Chambers, we recognise that protecting a property investment begins before the purchase price is paid. This guide outlines the essential legal and practical checks you should consider before purchasing property in Nigeria from abroad.

## 1. Verify the Seller's Identity and Legal Authority to Sell

One of the first questions to answer is whether the person offering the property is legally entitled to sell it.

Do not assume that someone has authority over a property simply because they possess documents, occupy the land, claim to be a family representative, or have been introduced by a trusted acquaintance.

Before proceeding, establish the seller's identity and the basis of their authority.

Your checklist should include:

- Verify the seller's identity using appropriate identification and independently check material details.
- Confirm whether the seller is the registered or recognised holder of the relevant interest in the property.
- Where the seller acts through an agent, obtain and verify the authority under which the agent acts.
- Where a company owns the property, establish the company's identity, its relationship to the property, and the authority of the persons executing the transaction.
- Where the property belongs to an estate, family, or jointly owned arrangement, establish who has the legal authority to consent to and complete the sale.
- Where an attorney acts under a power of attorney, examine the instrument, its scope, its validity, and whether it authorises the specific transaction.

In some circumstances, additional consents, probate documents, corporate approvals, or other supporting records may be required.

**Red flag:** A seller who refuses independent verification, insists that you must pay immediately, or cannot adequately explain their authority to sell should not be treated as trustworthy merely because the transaction was recommended by someone you know.

## 2. Conduct Independent Property Title Verification

One of the most important stages of a property transaction is verifying the title or other legal interest being offered for sale.

A seller may present a Certificate of Occupancy, Deed of Assignment, survey plan, allocation letter, or other document. However, the existence of a document does not automatically establish that the seller has a valid, transferable interest in the property.

The appropriate checks depend on the location, nature, history, and documentation of the property.

A proper title investigation may involve:

- Conducting appropriate searches at the relevant land registry or other official records office.
- Examining the root of title and the chain of transactions through which the seller claims ownership or an interest in the property.
- Checking whether the documents correspond with the property being offered.
- Investigating registered mortgages, encumbrances, competing interests, court orders, or other restrictions where relevant records and procedures permit.
- Confirming whether any necessary government consent, registration, or other legal requirements have been satisfied or remain outstanding.
- Identifying any inconsistencies between the seller's representations and the available records.

The applicable process differs between jurisdictions in Nigeria. Procedures and records in Lagos State, for example, may differ from those in Ogun, Abuja, or other parts of the country.

It is therefore advisable to engage a Nigerian legal practitioner to conduct or coordinate the relevant searches independently of the seller and the seller's representatives.

## Does a Certificate of Occupancy Mean the Property Is Safe to Buy?

Not necessarily.

A Certificate of Occupancy can be an important title document, but its significance must be assessed in the context of the property's history, the interest it evidences, the identity and authority of the parties, and any applicable legal requirements.

Similarly, a Deed of Assignment records a transfer of an interest but does not, by its mere existence, prove that the assignor had a valid interest to transfer.

The correct question is not simply, "Does the seller have a title document?" It is, "Does the seller have a legally defensible interest that can be transferred to me, and what steps are required to complete and perfect that transaction?"

## 3. Verify the Survey Plan and Physical Location of the Property

A property can have impressive documentation and still present serious risks if the land described in the documents does not correspond with the land being sold.

Before committing funds, ensure that the property can be properly identified on the ground and reconciled with the relevant survey and title records.

Consider the following checks:

- Obtain the survey plan and verify its authenticity through the appropriate channels.
- Engage a qualified surveyor to confirm the property's location, boundaries, dimensions, and relevant coordinates.
- Confirm that the land shown on the survey plan corresponds with the property being marketed to you.
- Investigate whether the land falls within an acquisition, committed government scheme, road alignment, setback, right-of-way, or other restricted area where relevant.
- Check for possible overlaps with adjoining plots or competing survey descriptions.
- Arrange an independent physical inspection, including through a qualified local representative where you cannot attend personally.

Where available and appropriate, official land information and survey records should be checked rather than relying exclusively on the seller's documents or the agent's assurances.

Do not rely solely on photographs, drone footage, video calls, location pins, or estate brochures. These may help you understand what is being marketed, but they do not establish the property's legal status or conclusively verify its boundaries.

## 4. Investigate Family Land, Joint Ownership, and Competing Claims

Land transactions in Nigeria may involve family ownership, customary interests, inherited property, joint ownership, or other arrangements that are not always obvious from the seller's presentation.

A person may be in possession of land or appear to control it without having sufficient authority to transfer the interest you intend to purchase.

Before proceeding, investigate the property's ownership history and determine whether other persons may have legally relevant interests.

Depending on the circumstances, this may require examining:

- The documents through which the property was originally acquired.
- The identity of relevant owners, co-owners, family representatives, trustees, or personal representatives.
- The authority and consent required from persons with an interest in the property.
- Whether the property is subject to inheritance disputes, pending litigation, or competing claims.
- Whether the seller has disclosed existing occupiers, tenants, or other persons whose interests may affect possession or use.

The applicable requirements depend on the ownership structure and the nature of the transaction. Where family or customary land is involved, the necessary parties and consents should be determined from the actual circumstances rather than assumed.

A transaction should not proceed merely because one family member, representative, or apparent owner promises that everyone else agrees.

## 5. Check for Government Acquisition and Land-Use Restrictions

A property may be physically accessible and actively marketed while still being affected by government acquisition, planning restrictions, or other limitations on its use.

This is particularly important where the seller promotes land as suitable for residential development, commercial use, or future appreciation.

Your legal and technical checks should consider:

- Whether the land is affected by a government acquisition or other relevant government interest.
- Whether any acquisition has been released, revoked, modified, or remains applicable, as supported by the relevant records.
- Whether the proposed use is consistent with applicable planning and land-use requirements.
- Whether access roads, drainage, setbacks, easements, or rights-of-way affect the property.
- Whether necessary development approvals or permits exist where required.

The fact that an estate has a perimeter fence, entrance gate, security personnel, or neighbouring buildings does not establish that the land is legally available for the intended use.

Likewise, claims that an acquisition problem has been resolved should be independently verified against appropriate records.

## 6. Examine the Sale Agreement Before Paying

Your sale agreement is not merely a document to sign after the commercial terms have been settled. It is one of the principal instruments through which the parties define their rights, obligations, and remedies.

When purchasing property from abroad, the agreement should be reviewed before you transfer substantial funds.

At a minimum, examine whether it clearly addresses:

- **The parties:** Correct legal names and the capacity in which each party acts.
- **The property:** An adequate description that corresponds with the verified property records.
- **Purchase price:** The total consideration, payment schedule, currency where relevant, and the authorised recipient of funds.
- **Seller's obligations:** The documents, consents, and other steps the seller must provide or complete.
- **Completion:** The conditions and timeline for completing the transaction and delivering the agreed documents.
- **Possession:** When and how possession will be delivered, including any disclosed occupation or tenancy.
- **Representations and warranties:** Appropriate commitments concerning the seller's authority, disclosed interests, and material facts about the property.
- **Default and termination:** The consequences of non-performance, including applicable refund obligations and other remedies.
- **Dispute resolution:** The agreed procedure and appropriate forum for resolving disputes.
- **Execution and documentation:** The formalities required for the particular transaction, including stamping, registration, and any necessary consent.

The agreement should reflect the actual transaction and the legal requirements applicable to the property. A generic template downloaded from the internet may omit important protections or contain provisions that do not fit your circumstances.

Where a developer or seller supplies its own contract, remember that the document is not automatically balanced simply because it is professionally drafted.

## 7. Establish a Safe and Documented Payment Process

Payment is one of the most sensitive stages of an overseas property purchase.

A buyer may complete extensive checks and still expose themselves to loss by transferring money to the wrong person, paying an unauthorised intermediary, or failing to preserve evidence of the transaction.

Before making payment:

- Confirm the legal identity of the recipient and their authority to receive the purchase price.
- Ensure that the payment arrangements are consistent with the sale agreement.
- Independently verify account details using a reliable communication channel.
- Avoid transferring funds to an unrelated personal or corporate account without a satisfactory, documented explanation and appropriate legal review.
- Establish whether payments are to be made in stages and identify the conditions that must be satisfied before each stage.
- Obtain receipts and retain bank transfer confirmations, invoices, acknowledgements, and relevant correspondence.
- Document any agency fee, additional charge, development levy, or other payment obligation before committing to it.

For substantial transactions, consider whether the contractual structure provides adequate safeguards if the seller fails to perform.

Payment arrangements should be designed around the verified transaction, not around pressure from a seller who claims that another buyer is waiting.

> An urgent payment deadline is not evidence that a property is a good investment.

## 8. Verify the Developer and the Estate, Not Just the Individual Plot

Where you intend to purchase property within an estate or from a property development company, due diligence should extend beyond the particular plot.

A developer may advertise attractive infrastructure, security, amenities, development timelines, and future returns. These representations should be assessed independently.

Consider checking:

- The developer's legal identity and relevant corporate records.
- The developer's legal interest in the land and authority to allocate or sell plots.
- The approved layout or scheme documentation, where applicable.
- Relevant planning and development approvals.
- Whether promised infrastructure and amenities are contractual commitments or merely promotional statements.
- The proposed completion and handover dates.
- The developer's obligations if the project is delayed, materially changed, or abandoned.
- The terms governing refunds, cancellation, additional charges, and changes to the allocation.

A registered company is not necessarily the lawful owner of every property it markets. Corporate registration and property title verification are separate exercises.

Where a development is still at an early stage, the legal and practical risks may differ significantly from those associated with a completed property with established title documentation.

## 9. Use a Trusted Representative Without Surrendering Independent Oversight

Many Nigerians abroad rely on relatives, friends, estate agents, or other local representatives to inspect property and facilitate transactions.

A representative can be valuable, but their involvement should not eliminate the buyer's independent oversight.

Establish a clear arrangement that identifies:

- The representative's specific responsibilities and limits of authority.
- Whether the representative may negotiate, sign documents, take possession, or make payments on your behalf.
- The information and evidence the representative must provide.
- How the representative's activities will be documented and reported.
- Whether the representative has any financial interest in the sale or receives a commission.
- The circumstances in which a formal power of attorney is necessary.

A power of attorney may be appropriate where someone needs to perform defined legal acts on your behalf. However, it should be drafted for the actual transaction, with its scope and limitations carefully considered.

It is also important to distinguish between an individual who helps inspect a property and an individual authorised to execute legally binding documents or complete the purchase.

Where possible, separate the roles of the seller's agent, the buyer's representative, the surveyor, and the buyer's independent legal adviser. This can reduce conflicts of interest and improve accountability.

## 10. Plan for Completion, Consent, Stamping, and Registration

Signing an agreement and paying the purchase price may not, by themselves, complete every legal step required for the transaction.

Depending on the property, the interest being transferred, the applicable law, and the transaction structure, further steps may be necessary to complete or perfect the buyer's interest.

These may include:

- Obtaining the relevant consent where legally required.
- Executing the appropriate transfer instrument.
- Paying applicable stamp duties.
- Registering the relevant instrument with the appropriate land registry.
- Satisfying other statutory or administrative requirements.
- Obtaining and preserving evidence of completed registration and other formalities.

In Lagos State, for example, the applicable process may involve requirements relating to Governor's Consent, stamping, and registration, depending on the transaction and the interest involved. Other jurisdictions may follow different procedures.

The precise steps should be confirmed by a legal practitioner familiar with the applicable jurisdiction and the property's documentation.

Before completion, establish who is responsible for each step, the anticipated costs, the expected timeline, and the documents you should receive as evidence that the process has been completed.

Do not assume that the seller's promise to handle all documentation means the necessary legal formalities have actually been carried out.

## 11. Preserve Your Records and Maintain a Complete Transaction File

A well-documented transaction is easier to monitor and may be easier to protect if a dispute arises.

Maintain an organised file containing the relevant documents and communications, including:

- The sale agreement and any amendments.
- Copies of the seller's title documents and relevant search results.
- The survey plan and applicable verification records.
- Evidence of payment and receipts.
- Correspondence with the seller, developer, agents, and representatives.
- Inspection reports, photographs, and other relevant property records.
- Any power of attorney or other authority used in the transaction.
- Completion documents, consent records, and evidence of stamping or registration where applicable.

Keep secure copies of the records and ensure that important documents remain accessible even if your representative, agent, or developer becomes difficult to contact.

Where material representations are made through calls or messaging applications, consider obtaining written confirmation of the relevant commitments and retaining the original communications.

Documentation should not be treated as an administrative afterthought. It is part of managing the legal and commercial risks of the investment.

## 12. Recognise the Warning Signs Before It Is Too Late

Some warning signs should prompt further investigation or a pause in the transaction until the concerns are resolved.

Be particularly cautious where:

- The seller refuses independent title verification.
- The person selling the property cannot adequately establish their authority.
- The property description, survey plan, and title documents contain material inconsistencies.
- You are pressured to make immediate payment without adequate documentation.
- The seller insists that legal review is unnecessary because the estate is popular or the property was recommended by a trusted person.
- The payment recipient differs from the contractual seller without a satisfactory explanation.
- The developer makes substantial promises that are absent from the contract.
- There are unresolved ownership disputes, unexplained encumbrances, or contradictory claims about the property.
- The seller offers assurances that a title or acquisition problem will be resolved after you pay, without adequate contractual protection and independent verification.

No single warning sign necessarily establishes fraud. However, unexplained inconsistencies, refusal to cooperate with reasonable checks, and pressure to bypass normal safeguards should be taken seriously.

Where a material issue remains unresolved, consider suspending payment or execution until you have obtained appropriate independent advice.

## Conclusion: Protect Your Investment Before You Transfer Your Money

Buying property in Nigeria from abroad can be a valuable investment, but distance makes independent verification, clear documentation, and proper transaction management especially important.

The central lesson is simple: do not rely solely on the seller's assurances, the reputation of an estate, the recommendation of a relative, or the appearance of a property document. Establish what interest is being offered, verify the seller's authority, investigate material risks, and understand the legal steps required to complete the transaction.

Taking these precautions before payment can help you identify problems early, negotiate appropriate protections, and make a more informed investment decision.

## How Rogad Chambers Can Help

Rogad Chambers provides legal support for property transactions and related matters, including title due diligence, review of sale agreements, property documentation, title perfection, and representation in property-related disputes.

For Nigerians in the diaspora and other overseas investors, independent legal support can help bridge the distance between you and the transaction taking place in Nigeria.

Whether you are considering a plot of land, a residential property, an off-plan development, or a commercial investment, our approach is to help you understand the legal position, identify material risks, and determine the appropriate steps before you commit your funds.

> Planning to buy property in Nigeria from abroad? Contact Rogad Chambers to discuss your proposed transaction and the legal due diligence it requires.

**Disclaimer:** This article is for general informational purposes and does not constitute legal advice. Property transactions are fact-specific, and the applicable requirements may vary by state, property type, ownership structure, and the nature of the interest being transferred. Obtain independent legal advice before committing to a transaction.`
  }
];

export const insightSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
export const insightPath = (item) => `/insights/${insightSlug(item.title)}`;

export const insightTypes = [
  { id: "newsletter", label: "Newsletters", singular: "Newsletter", items: newsletters },
  { id: "blog", label: "Blog Posts", singular: "Blog post", items: blogPosts }
];
// Every item tagged with its type, newsletters first, each list newest first.
export const allInsights = insightTypes.flatMap((t) => t.items.map((item) => ({ ...item, type: t.id, typeLabel: t.singular })));
export const findInsight = (slug) => allInsights.find((it) => insightSlug(it.title) === slug);

// The first item marked `featured` (in list order: newsletters, then blog posts); otherwise the most recent newsletter.
export const featuredInsight = allInsights.find((it) => it.featured) ?? allInsights[0];

export const insightPractices = (item) => (item.practiceAreas ?? []).map((t) => practices.find((p) => p.title === t)).filter(Boolean);
export const insightImage = (item) => (item.image ? { src: item.image, alt: item.imageAlt ?? "" } : insightPractices(item)[0] && { src: insightPractices(item)[0].image, alt: "" });
