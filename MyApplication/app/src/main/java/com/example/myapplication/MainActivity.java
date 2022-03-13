package com.example.myapplication;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    public EditText note;
    public EditText time;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        note = findViewById(R.id.editNote);
        time= findViewById(R.id.EditTime);

        Button playbutton= findViewById(R.id.ButtonPlay);
        playbutton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                PlayAudio(note.getText().toString(),time.getText().toString());
            }
        });


    }
    public void PlayAudio(String note_name,String time_name){
        
    }
}