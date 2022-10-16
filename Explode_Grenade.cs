using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Explode_Grenade : MonoBehaviour
{
    public GameObject mech1;
    public GameObject mech2;
    public GameObject detonator;
    public GameObject explosion;
    GameObject projectile;
    public bool live = false;
    private int damageRadius = 10;
    private float damageMultiplier = 500;
    // Start is called before the first frame update
    void Start()
    {
        projectile = this.gameObject;
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void OnCollisionEnter(Collision collision)
    {
        if(live){
            float mech1_dist = Vector3.Distance(mech1.transform.position, projectile.transform.position);
            float mech2_dist = Vector3.Distance(mech2.transform.position, projectile.transform.position);
            //Debug.Log(mech1_dist);
            //Debug.Log(mech2_dist);
            if(mech1_dist <= damageRadius){
                float damage = (float)(damageMultiplier * (1.0f/mech1_dist));
                if(damage > mech1.GetComponent<Interpret>().health){
                    mech1.GetComponent<Interpret>().health = 0;
                }
                else{
                    mech1.GetComponent<Interpret>().health -= damage;
                }
                Debug.Log("Mech 1 Health: " + mech1.GetComponent<Interpret>().health.ToString());
            }
            if(mech2_dist <= damageRadius){
                float damage = (float)(damageMultiplier * (1.0f/mech2_dist));
                if(damage > mech2.GetComponent<Interpret>().health){
                    mech2.GetComponent<Interpret>().health = 0;
                }
                else{
                    mech2.GetComponent<Interpret>().health -= damage;
                }
                Debug.Log("Mech 2 Health: " + mech2.GetComponent<Interpret>().health.ToString());
            }
            ContactPoint contact = collision.contacts[0];
            Debug.Log("Launch Distance 1: " + mech1_dist);
            Debug.Log("Launch Distance 2: " + mech2_dist);
            // Rotate the object so that the y-axis faces along the normal of the surface
            Vector3 pos = contact.point;
            //Destroy(projectile);
            live = false;
            animate_explosion();
            projectile.transform.position = new Vector3(-10.48f, 4.64f, 86.34f);

        }
    }

    void animate_explosion(){
        GameObject exp = Instantiate(explosion);
        exp.transform.position = projectile.transform.position;
        exp.GetComponent<PseudoVolumetricExplosion>().explode();
    }

    // void animate_explosion(){
    //     GameObject det = Instantiate(detonator);
    //     det.transform.position = projectile.transform.position;
    //     det.GetComponent<Detonator>().Explode();
    //     det.GetComponent<Detonator>().Reset();     
    // }
}
